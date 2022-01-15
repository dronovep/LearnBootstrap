'use strict';

function Default(gulp_callback) {
    console.log('running default task');
    console.log('default task is over');
    gulp_callback();
}

exports.task = Default;