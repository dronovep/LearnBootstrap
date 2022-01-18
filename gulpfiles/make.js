'use strict';

const {pipe, dest} = require("gulp");

var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

function make() {
    return tsProject.src().pipe(tsProject()).js.pipe(dest("dist"));
}

exports.task = make;