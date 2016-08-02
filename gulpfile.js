'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var del = require('del');
var config ={
  rootappPath:'./app',
  distribFolder:'./dist',
  pathToJsFiles :'./app/**/*.js',
  pathToIndex:'./app/index.html',
  libJsFiles:[
            'node_modules/babel-polyfill/dist/polyfill.js',
            'node_modules/systemjs/dist/system.js'
  ]
};
gulp.task("default", function () {
  return gulp.src(config.pathToJsFiles)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

//task to transpile the js code and copy to the distrib folder
gulp.task('transpile-js', function() {
    return gulp.src(config.pathToJsFiles)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.distribFolder));
});

// gulp task to copy library files
gulp.task('copy-lib-js-files',function(){
   return gulp.src(config.libJsFiles)
            .pipe(gulp.dest(config.distribFolder));
});
//gulp task to clean the dist folder
gulp.task('clean-dist', function(){
  return del(config.distribFolder+'/**/*');
});

//gulp task to copy the html file to the dist folder
gulp.task('copy-html', function(){
  return gulp.src(config.pathToIndex)
            .pipe(gulp.dest(config.distribFolder));
});

//gulp task to build in dev
gulp.task('build-dev',['clean-dist', 'copy-lib-js-files','transpile-js','copy-html']);