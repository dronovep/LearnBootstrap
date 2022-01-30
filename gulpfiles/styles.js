'use strict';
const {series, src, dest, watch, lastRun, parallel} = require("gulp");
const shell = require('gulp-shell')




exports.task = shell.task('sass --color --style=compressed src/styles/:dist/css/');
exports.watch = shell.task('sass --watch --color --style=compressed src/styles/:dist/css/');

