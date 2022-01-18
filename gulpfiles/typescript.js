'use strict';

const {pipe, dest} = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

function typescript() {
    return tsProject.src().pipe(tsProject()).js.pipe(dest("dist/js/"));
}

exports.task = typescript;