const cwd = process.cwd();

/**
 *
 *
 * @param {name} - name of the directory
 * @return {object} - containing platform and path of the newly created project
 */
const isWindows = name => {
	// check whether the OS is windows or not
	const isWindows = process.platform === 'win32' ? true : false;

	if (isWindows) {
		return true;
	}
	return false;
};

/**
 *
 *
 * @param {currentDir} - path of the directory from where CLI is running
 */
const templatePaths = currentDir => {
	const slash = '\\';

	return {
		editorConfig: `${currentDir}/template/.editorconfig`,
		winEditorConfig: `${currentDir}${slash}template${slash}.editorconfig`,
		gitIgnore: `${currentDir}/template/.gitignore`,
		winGitIgnore: `${currentDir}${slash}template${slash}.gitignore`,
		npmrc: `${currentDir}/template/.npmrc`,
		winNpmrc: `${currentDir}${slash}template${slash}.npmrc`,
		prettier: `${currentDir}/template/.prettierrc.json`,
		winPrettier: `${currentDir}${slash}template${slash}.prettierrc.json`,
		contributing: `${currentDir}/template/contributing.md`,
		winContributing: `${currentDir}${slash}template${slash}contributing.md`,
		readme: `${currentDir}/template/readme.md`,
		winReadme: `${currentDir}${slash}template${slash}readme.md`,
		gitAttributes: `${currentDir}/template/.gitattributes`,
		winGitAttributes: `${currentDir}${slash}template${slash}.gitattributes`,
		indexjs: `${currentDir}/template/index.js`,
		winIndexjs: `${currentDir}${slash}template${slash}index.js`,
		pkgJSON: `${currentDir}/template/package.json`,
		winPkgJSON: `${currentDir}${slash}template${slash}package.json`,
		changelog: `${currentDir}/template/changelog.md`,
		winChangelog: `${currentDir}${slash}template${slash}changelog.md`
	};
};

module.exports = {
	isWindows,
	templatePaths
};
