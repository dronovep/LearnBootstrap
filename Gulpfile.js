const Default = require("./gulpfiles/default.js")
const Make = require("./gulpfiles/make.js")
const Styles = require("./gulpfiles/styles.js")
const Clean = require("./gulpfiles/clean.js")

// команда gulp
exports.default = Default.task;

// команда gulp make
exports.make = Make.task;

exports.build_styles = Styles.task;
exports.watch_styles = Styles.watch;

exports.clean = Clean.task;