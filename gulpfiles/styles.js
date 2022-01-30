'use strict';
const {series, src, dest, watch, lastRun, parallel} = require("gulp");
const sass = require('gulp-dart-sass');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

function processSass() {
    return src(['./src/styles/**/*.scss', './node_modules/bootstrap/dist/css/bootstrap.css'], {since: lastRun(processSass)})
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({ overrideBrowserslist: ['>0.1%'] })]))
        .pipe(dest('./obj/css/'));
}

function packStyles() {
    return src('./obj/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(cssnano())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./dist/css/'));
}



function watchStyles() {
    watch(
        ['./src/styles/**/*.scss', './node_modules/bootstrap/dist/css/bootstrap.css'],
        {ignoreInitial: false},
        series(processSass, packStyles)
    );
}

exports.task = series(processSass, packStyles);
exports.watch = watchStyles;