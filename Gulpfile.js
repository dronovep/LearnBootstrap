const {series, src, parallel, dest, watch} = require("gulp");
const Default = require("./gulpfiles/default.js")
const Make = require("./gulpfiles/make.js")
const Watch = require("./gulpfiles/watch.js")
const Clean = require("./gulpfiles/clean.js")
const Test = require("./gulpfiles/test.js")

// команда gulp
exports.default = Default.task;

// команда gulp make
exports.make = Make.task;
exports.watch = Watch.task;
exports.test = Test.task;

exports.clean = Clean.task;