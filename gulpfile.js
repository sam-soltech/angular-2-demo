var gulp  = require('gulp');
var ts    = require('gulp-typescript');
var browserSync = require('browser-sync').create();
historyApiFallback = require('connect-history-api-fallback')
var startpaths = {
  electron: './main.js',
  js: './app/**/*.ts',
  scss: './frontend/scss/**/*.scss',
  templates: './frontend/views/**/*.jade'
}

var endpaths = {
  js: './app/',
  html:'./public/views/',
  css: './public/css/',
  assets: './public/assets/'
}


gulp.task('ts', function () {

  var tsProject = ts.createProject('./tsconfig.json');
  var tsc = tsProject.src()
    .pipe(ts({
      "experimentalDecorators": true
    }))
});


gulp.task('serve', function() {
    browserSync.init({
      server: {
          baseDir: "./",
          middleware: [ historyApiFallback() ]
      }
    });
});


gulp.task('reload', function() {
    browserSync.reload()
});



gulp.task('default',['ts','serve'], function () {
   gulp.watch([startpaths.scss,startpaths.templates,startpaths.js],['ts','reload']);
});
