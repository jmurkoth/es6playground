'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var del = require('del');
var plumber = require('gulp-plumber');

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
        .pipe(plumber({
                errorHandler: function (err) {
                    console.log(err);
                    this.emit('end');
                }
            }))
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
gulp.task('build-dev',
    gulp.series('clean-dist',
    gulp.parallel( 'copy-lib-js-files','transpile-js','copy-html')
    ));
    
// gulp task to watch the folder and trigger build
gulp.task('watch', function(){
    
   gulp.watch(config.rootappPath +'/**/*', gulp.series('build-dev'));
});
 