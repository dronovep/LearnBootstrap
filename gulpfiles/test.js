'use strict';

const {series, src, dest, watch, lastRun, parallel} = require("gulp");
const dart_sass = require('sass');
const gulp_sass = require('gulp-sass');
const sass = gulp_sass(dart_sass);
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

function includeLibs() {
    return src('./node_modules/bootstrap/dist/css/bootstrap.css', {since: lastRun(includeLibs)})
        .pipe(cssnano())
        .pipe(dest('./obj/css/test/lib/'));
}

function testSass() {
    return src('./src/styles/test/**/*.scss', {since: lastRun(testSass)})
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(dest('./obj/css/test/'));
}

function packTest() {
    return src('./obj/css/test/**/*.css')
        .pipe(concat('test.css'))
        .pipe(dest('dist/css/test/'));
}

exports.task = function() {
    watch('./src/styles/test/**/*.scss', {ignoreInitial: false}, series(parallel(testSass, includeLibs), packTest));
}

