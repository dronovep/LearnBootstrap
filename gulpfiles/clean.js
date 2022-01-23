const del = require("del");

function clean(cb) {
    del.sync(['./dist/**']);
    del.sync(['./obj/**']);
    cb();
}

exports.task = clean;