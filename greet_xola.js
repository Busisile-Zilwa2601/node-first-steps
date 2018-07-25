const chalk = require('chalk');
const greet = require('./greet');
const xola = greet();
console.log(xola.molo('Xola'));
const styledMessage = chalk.bgGreen.white(xola.hello('Xola'));
console.log(styledMessage);
