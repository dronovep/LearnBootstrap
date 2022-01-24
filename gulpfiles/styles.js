'use strict';
const {series, src, dest, watch, lastRun, parallel} = require("gulp");
const dart_sass = require('sass');
const gulp_sass = require('gulp-sass');
const styles = gulp_sass(dart_sass);
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

function includeLibs() {
    return src('./node_modules/bootstrap/dist/css/bootstrap.css', {since: lastRun(includeLibs)})
        .pipe(cssnano())
        .pipe(dest('./obj/css/lib/'));
}

function buildStyles() {
    return src('./src/styles/**/*.scss', {since: lastRun(buildStyles)})
        .pipe(styles().on('error', styles.logError))
        .pipe(cssnano())
        .pipe(dest('./obj/css/'));
}

function packStyles() {
    return src('./obj/css/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(dest('dist/css/'));
}

function watchStyles() {
    watch(
        ['./src/styles/**/*.scss', './node_modules/bootstrap/dist/css/bootstrap.css'],
        {ignoreInitial: false},
        series(parallel(buildStyles, includeLibs), packStyles)
    );
}

exports.task = series(parallel(buildStyles, includeLibs), packStyles);
exports.watch = watchStyles;