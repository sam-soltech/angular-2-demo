var gulp  = require('gulp');
var ts    = require('gulp-typescript');
var browserSync = require('browser-sync').create();
historyApiFallback = require('connect-history-api-fallback')
var startpaths = {
  electron: './main.js',
  js: './app/**/*.ts',
  css: './frontend/scss/**/*.css',
  html: './app/**/*.html'
}

gulp.task('ts', function () {

  var tsProject = ts.createProject('./tsconfig.json');
  var tsc = tsProject.src()
    .pipe(ts({
      //this option overwrite is required to squash typescript compile error
      "experimentalDecorators": true
    }))
});


gulp.task('serve', function() {
    browserSync.init({
      server: {
        baseDir: "./",
        //this is rerquired for broswer sync to work with spa
        middleware: [ historyApiFallback() ]
      }
    });
});


gulp.task('reload', function() {
    browserSync.reload()
});



gulp.task('default',['ts','serve'], function () {
   gulp.watch([startpaths.scss,startpaths.html,startpaths.js],['ts','reload']);
});
