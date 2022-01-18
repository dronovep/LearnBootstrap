const {series, src, parallel, dest, watch} = require("gulp");
var Default = require("./gulpfiles/default.js")
var Make = require("./gulpfiles/make.js")
var Watch = require("./gulpfiles/watch.js")

// команда gulp
exports.default = Default.task;

// команда gulp make
exports.make = Make.task;

// команда gulp watch
exports.watch = Watch.task