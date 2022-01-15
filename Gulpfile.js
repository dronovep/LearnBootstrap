const {series, src, parallel, dest} = require("gulp");
var Default = require("./gulpfiles/default.js")
var Make = require("./gulpfiles/make.js")

// команда gulp
exports.default = Default.task;

// команда gulp make
exports.make = Make.task;