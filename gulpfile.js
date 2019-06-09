
const { src, dest, series } = require('gulp');
// const rename = require("gulp-rename");
const color = require('gulp-color');
const run = require('gulp-run');
const open = require('gulp-open');

function serveDocs(cb) {
  console.log (color('gulp serveDocs', 'GREEN'));
  return run('docsify serve ./ --port 3333').exec();
}
exports.serveDocs = serveDocs;

function openDocs(cb) {
  console.log (color('gulp openDocs', 'GREEN'));
  return open({uri: 'http://localhost:3333'});
}
exports.openDocs = openDocs;

exports.start = series(serveDocs, openDocs);

function copy_build_before_deploy (cb){
    console.log (color('gulp copy_build_before_deploy', 'GREEN'));
    return src('./build/**/*').pipe(dest('firebase/build'));
}

exports.deploy = series(copy_build_before_deploy);
