var gulp  = require('gulp');
var ts    = require('gulp-typescript');
var browserSync = require('browser-sync').create();
historyApiFallback = require('connect-history-api-fallback')

var startpaths = {
  js: './app/**/*.ts',
  css: './app/**/*.css',
  html: './app/**/*.html'
}

var endpaths = {
  js: './app',
  css: './',
  html: './'
}

gulp.task('ts', function () {

  var tsProject = ts.createProject('./tsconfig.json');
  var tsc = tsProject.src()
    .pipe(ts({
      "experimentalDecorators": true,
      'emitDecoratorMetadata': true
    })).pipe(gulp.dest(endpaths.js))
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
   gulp.watch([startpaths.css,startpaths.html,startpaths.js],['ts','reload']);
});
