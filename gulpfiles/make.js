'use strict';

function make(gulp_callback) {
    console.log('running make task');
    console.log('make task is over');
    gulp_callback();
}

exports.task = make;