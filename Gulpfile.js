var gulp = require("gulp");


// команда gulp
exports.default = (gulp_callback) => {
    console.log('running hello task');
    console.log('hello task is over');
    gulp_callback();
};


// команда gulp make
exports.make = (gulp_callback) => {
    console.log('running make task');
    console.log('make task is over');
    gulp_callback();
};

