var gulp  = require('gulp');
var ts    = require('gulp-typescript');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var browserSync = require('browser-sync').create();
historyApiFallback = require('connect-history-api-fallback')

var startpaths = {
  js: './app/**/*.ts',
  scss: './frontend/scss/**/*.scss',
  templates: './frontend/views/**/*.jade'
}


var endpaths = {
  js: './public/app',
  css: './public/styles',
  html: './public'
}


gulp.task('ts', function () {
  var tsProject = ts.createProject('./tsconfig.json');
  var tsc = tsProject.src()
    .pipe(ts({
      "experimentalDecorators": true,
      'emitDecoratorMetadata': true
    })).pipe(gulp.dest(endpaths.js))
});

gulp.task('sass', function () {
  return gulp.src(startpaths.scss)
  .pipe(sass({
    style: 'expanded',
  }))
  .pipe(gulp.dest(endpaths.css))
});


gulp.task('templates', function () {
  return gulp.src(startpaths.templates)
  .pipe(jade({
    pretty:true
  }))
  .pipe(gulp.dest(endpaths.html))
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


gulp.task('reload',['ts','sass','templates'], function() {
    browserSync.reload()
});



gulp.task('default',['ts','sass','templates','serve'], function () {
   gulp.watch([startpaths.scss,startpaths.templates,startpaths.js],['reload']);
});
