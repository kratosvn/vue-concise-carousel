const args = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const semver = require('semver');
const execa = require('execa');
const currentVersion = require('./package.json').version;
const { prompt } = require('enquirer');

const preId =
  args.preid ||
  (semver.prerelease(currentVersion) && semver.prerelease(currentVersion)[0]);
const skipBuild = args.skipBuild;

const versionIncrements = [
  'patch',
  'minor',
  'major',
  ...(preId ? ['prepatch', 'preminor', 'premajor', 'prerelease'] : []),
];

const inc = (i) => semver.inc(currentVersion, i, preId);
const run = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: 'inherit', ...opts });
const step = (msg) => console.log(chalk.cyan(msg));

const updatePackage = (pkgRoot, version) => {
  const pkgPath = path.resolve(pkgRoot, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  pkg.version = version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
};

const publishPackage = async (version, tag) => {
  const pkgPath = path.resolve(path.resolve(__dirname, ''), 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const pkgName = pkg.name;

  step(`Publishing ${pkgName}...`);
  try {
    await run('yarn', [
      'publish',
      '--new-version',
      version,
      ...(tag ? ['--tag', tag] : []),
      '--access',
      'public',
    ]);
    console.log(chalk.green(`Successfully published ${pkgName}@${version}`));
  } catch (e) {
    if (e.stderr.match(/previously published/)) {
      console.log(chalk.red(`Skipping already published: ${pkgName}`));
    } else {
      throw e;
    }
  }
};

const main = async () => {
  let targetVersion = args._[0];
  if (!targetVersion) {
    // no explicit version, offer suggestions
    const { release } = await prompt({
      type: 'select',
      name: 'release',
      message: 'Select release type',
      choices: versionIncrements
        .map((i) => `${i} (${inc(i)})`)
        .concat(['custom']),
    });

    if (release === 'custom') {
      targetVersion = (
        await prompt({
          type: 'input',
          name: 'version',
          message: 'Input custom version',
          initial: currentVersion,
        })
      ).version;
    } else {
      targetVersion = release.match(/\((.*)\)/)[1];
    }

    if (!semver.valid(targetVersion)) {
      throw new Error(`invalid target version: ${targetVersion}`);
    }

    const { yes } = await prompt({
      type: 'confirm',
      name: 'yes',
      message: `Releasing v${targetVersion}. Confirm?`,
    });

    if (!yes) {
      return;
    }

    let releaseTag = args.tag || null;
    if (!releaseTag) {
      const { tag } = await prompt({
        type: 'select',
        name: 'tag',
        message: 'Select release type',
        choices: ['next', 'latest'].map((i) => `${i}`),
      });
      releaseTag = tag;

      const { yes } = await prompt({
        type: 'confirm',
        name: 'yes',
        message: `Releasing with --tag ${releaseTag}. Confirm?`,
      });

      if (!yes) {
        return;
      }
    }

    // update package versions
    step('\nUpdate package.json...');
    updatePackage(path.resolve(__dirname, ''), targetVersion);

    // build package
    step('\nBuilding package...');
    if (!skipBuild) {
      await run('yarn', ['build:lib']);
      await run('yarn', ['build:demo']);
    } else {
      console.log(`(skipped)`);
    }

    const { stdout } = await run('git', ['diff'], { stdio: 'pipe' });
    if (stdout) {
      step('\nCommitting changes...');
      await run('git', ['add', '-A']);
      await run('git', [
        'commit',
        '-m',
        `:tada: :rocket: release: v${targetVersion}`,
      ]);
    } else {
      console.log('No changes to commit.');
    }

    // publish package
    step('\nPublishing package...');
    await publishPackage(targetVersion, releaseTag);

    // push to GitHub
    step('\nPushing to GitHub...');
    await run('git', ['tag', `v${targetVersion}`]);
    await run('git', ['push', 'origin', `refs/tags/v${targetVersion}`]);
    await run('git', ['push']);

    console.log();
  }
};

main().catch((err) => {
  console.error(err);
});
