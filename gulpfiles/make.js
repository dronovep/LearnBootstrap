'use strict';

const {parallel, series} = require("gulp");
const clean = require("./clean");
const typescript = require("./typescript");
const sass = require("./sass");


exports.task = series(clean.task, parallel(typescript.task, sass.task))