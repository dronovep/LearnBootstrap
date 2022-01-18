const {series, src, parallel, dest} = require("gulp");
const Default = require("./gulpfiles/default.js")
const Make = require("./gulpfiles/make.js")

// команда gulp
exports.default = Default.task;

// команда gulp make
exports.make = Make.task;