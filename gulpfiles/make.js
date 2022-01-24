'use strict';

const {parallel, series} = require("gulp");
const clean = require("./clean");
const typescript = require("./typescript");
const sass = require("./styles");


exports.task = series(parallel(typescript.task, sass.task))