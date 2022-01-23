'use strict';

const {series} = require("gulp");
const {watch} = require("gulp-watch");
const sass = require("./sass");


exports.task = function() {
    watch('src/styles/**/*.scss', series(sass.task));
}

