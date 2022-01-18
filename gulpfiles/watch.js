const {watch} = require("gulp");

function wfunc(cb) {
    console.log('что-то поменялось');
    cb();
}

function Watch() {
    watch('./src/other/**', wfunc);
}

exports.task = Watch;