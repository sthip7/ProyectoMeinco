var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');
    



gulp.task('js', function(){
    gulp.src('js/source/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build/'))
});
gulp.task('css', function(){
    gulp.src('css/source/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/min'))
});
gulp.task('sass', function(){
    gulp.src('css/source/*.scss')
        .pipe(sass())
        //.pipe(minifyCSS())
        .pipe(gulp.dest('css/min/'))
});

gulp.task('watch', function(){
    gulp.watch('css/source/*.scss', ['sass']);
    gulp.watch('js/source/*.js', ['js']);
    
});

gulp.task('default', ['','watch']); 