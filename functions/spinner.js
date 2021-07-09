const chalk = require('chalk');
const ora = require('ora');

const spinner = ora();

/**
 *
 * @param {spinner} - instance of ora
 * @return {msg} - start message
 */
const start = msg => spinner.start(`${chalk.bold.dim(`${msg}`)}`);

/**
 *
 * @param {spinner} - instance of ora
 * @return {msg} - success message
 */
const succeed = msg => spinner.succeed(`${chalk.white(`${msg}`)}`);

/**
 *
 * @param {spinner} - instance of ora
 * @return {msg} - fail message
 */
const fail = msg => spinner.fail(`${msg}`);

module.exports = {
	start,
	succeed,
	fail
};
