'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var del = require('del');
var plumber = require('gulp-plumber');
var util = require ('gulp-util');
var browserSync = require('browser-sync').create();
var bsconfig = require('./bs-config.json');

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
    log('*** watching files for changes');
   gulp.watch(config.rootappPath +'/**/*', gulp.series('build-dev','browsersync-start'));
});
 
 gulp.task('browsersync-start', function(done){
     if(browserSync.active)
     {
         log('*** Reloading browser');
         browserSync.reload();
         done();
         return;
     }
      var config =   {
                port:8000, 
                files: ["./dist/**/*.{html,htm,css,js}"], 
                server: { "baseDir": "./dist" } ,
                reloadDelay: 100,
                ghostMode: { // these are the defaults t,f,t,t
                    clicks: true,
                    location: false,
                    forms: true,
                    scroll: true
                },
                injectChanges: true,
                logFileChanges: true,
                logLevel: "info",
                logPrefix: "ES6Playground",
                notify: true
                };
     log('*** Initializing browser ****');
      browserSync.init(bsconfig);
      done();
     
  
 } );
gulp.task('serve-dev',gulp.series( 'build-dev','browsersync-start','watch'));

 function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
               util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}