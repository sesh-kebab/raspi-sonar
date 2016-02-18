var gulp = require("gulp");
var babel = require("gulp-babel");
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

gulp.task("default", ['clean', 'lint'], function () {
    return gulp.src("index.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("lib"));
});

gulp.task('clean', function(cb) {
    del(['lib']).then(function() { cb(); });
});

gulp.task('lint', function() {
    return gulp.src('index.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});