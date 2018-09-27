var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css')
   ;


gulp.task('copyHtml', function(){
   gulp.src('source/*.html')
       .pipe(gulp.dest('dist'));
});

gulp.task('copyFonts', function(){
    gulp.src('source/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('imageMin', function(){
    gulp.src('source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('minifyJs', function () {
    gulp.src('source/js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('sass', function () {
   gulp.src('source/scss/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(prefix({
           browsers: ['last 2 versions'],
           cascade: false
       }))
       .pipe(cleanCss())
       .pipe(gulp.dest('dist/css'))
});


gulp.task('default', ['copyHtml', 'copyFonts', 'imageMin', 'minifyJs', 'sass']);

gulp.task('watch', function () {
    gulp.watch('source/js/*.js', ['minifyJs']);
    gulp.watch('source/fonts/**/*', ['copyFonts']);
    gulp.watch('source/*.html', ['copyHtml']);
    gulp.watch('source/img/*', ['imageMin']);
    gulp.watch('source/scss/*.scss', ['sass']);
});