#!/usr/bin/env node

/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const end = require('./utils/end');
const handleError = require('node-cli-handle-error');

(module.exports = async () => {
	const templatePath = __dirname;
	const flags = [...process.argv.slice(2)];

	const javaScript =
		flags.includes(`--javascript`) || flags.includes(`-js`) ? true : false;

	try {
		init();
		await cli(templatePath, javaScript);
		await end();
	} catch (err) {
		handleError(err);
	}
})();
