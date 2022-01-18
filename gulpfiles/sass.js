'use strict';
const {src, pipe, dest} = require("gulp");
const dart_sass = require('sass');
const gulp_sass = require('gulp-sass');
const sass = gulp_sass(dart_sass);

function styles() {
    return src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css/'));
};

exports.task = styles;