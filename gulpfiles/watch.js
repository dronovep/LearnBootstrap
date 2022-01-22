'use strict';

const {parallel, series, watch} = require("gulp");
const sass = require("./sass");


exports.task = function() {
    watch('src/styles/**/*.scss', series(sass.task));
}

