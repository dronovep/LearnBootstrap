const del = require("del");

function clean(cb) {
    del.sync(['./dist/**']);
    cb();
}

exports.task = clean;