const { command } = require('execa');
const handleError = require('node-cli-handle-error');
const cwd = process.cwd();
const { isWindows, templatePaths } = require('../functions/path');
const { start, succeed, fail } = require('../functions/spinner');

module.exports = async (dirName, javaScript = false) => {
	const windows = isWindows();
	const paths = templatePaths(dirName);

	try {
		start(`Initializing git in the directory...`);
		await command(`git init`);
		succeed(`Initialized empty git repository.`);

		start(`Creating git ignore file...`);
		command(`npx @msaaddev/gitignore`);
		succeed(`git ignore file created.`);

		if (!windows) {
			start(`Creating git attribute file...`);
			command(`cp ${paths.gitAttributes} ${cwd}`);
			succeed(`git attribute file created.`);

			start(`Adding editor configurations...`);
			command(`cp ${paths.editorConfig} ${cwd}`);
			succeed(`Editor configurations added.`);

			if (javaScript) {
				start(`Adding .npmrc file...`);
				command(`cp ${paths.npmrc} ${cwd}`);
				succeed(`.npmrc file created.`);

				start(`Creating package.json file...`);
				command(`cp ${paths.pkgJSON} ${cwd}`);
				succeed(`package.json file created.`);

				start(`Creating index.js file...`);
				command(`cp ${paths.indexjs} ${cwd}`);
				succeed(`index.js file created.`);

				start(`Adding prettier configuration...`);
				command(`cp ${paths.prettier} ${cwd}`);
				succeed(`Prettier config file added.`);
			}

			start(`Adding contributing guidelines...`);
			command(`cp ${paths.contributing} ${cwd}`);
			succeed(`Contributing guidelines added.`);

			start(`Adding changelog...`);
			command(`cp ${paths.changelog} ${cwd}`);
			succeed(`changelog.md file created.`);

			start(`Creating readme files...`);
			command(`cp ${paths.readme} ${cwd}`);
			succeed(`readme file created.`);
		} else {
			start(`Creating git attribute file...`);
			command(`copy ${paths.winGitAttributes} ${cwd}`);
			succeed(`git attribute file created.`);

			start(`Adding editor configurations...`);
			command(`copy ${paths.winEditorConfig} ${cwd}`);
			succeed(`Editor configurations added.`);

			if (javaScript) {
				start(`Adding .npmrc file...`);
				command(`copy ${paths.winNpmrc} ${cwd}`);
				succeed(`.npmrc file created.`);

				start(`Creating package.json file...`);
				command(`copy ${paths.winPkgJSON} ${cwd}`);
				succeed(`package.json file created.`);

				start(`Creating index.js file...`);
				command(`copy ${paths.winIndexjs} ${cwd}`);
				succeed(`index.js file created.`);

				start(`Adding prettier configuration...`);
				command(`copy ${paths.winPrettier} ${cwd}`);
				succeed(`Prettier config file added.`);
			}

			start(`Adding changelog...`);
			command(`copy ${paths.winChangelog} ${cwd}`);
			succeed(`changelog.md file created.`);

			start(`Creating readme files...`);
			command(`copy ${paths.winReadme} ${cwd}`);
			succeed(`readme file created.`);
		}

		if (javaScript) {
			start(`Installing Prettier as a dev dependency...`);
			await command(`npm i -D prettier`);
			succeed(`prettier installed as a dev dependency.`);
		}

		start(`Adding code of conduct...`);
		await command(`npx conduct`);
		succeed(`Code of conduct added.`);

		start(`Adding license...`);
		await command(`npx license MIT`);
		succeed(`MIT license added.`);
	} catch (err) {
		fail(`Couldn't add FOSS files.`);
		handleError(err);
	}
};
