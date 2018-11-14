var gulp = require('gulp'),
     minCSS = require('gulp-clean-css'),
     cssbeautify = require('gulp-cssbeautify'),                          prefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('copyHtml', function(){
    gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('minimizeCSS', function () {
    gulp.src('app/scss/main.css')
        .pipe(minCSS())
        .pipe(prefixer())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('beautyCSS', function () {
    gulp.src('app/scss/main.css')
        .pipe(cssbeautify())
        .pipe(prefixer())
        .pipe(gulp.dest('dist/css/pure'))
});

gulp.task('imageMin', function(){
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('minifyJs', function () {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('moveFonts', function () {
    gulp.src('app/fonts/BrandonGrotesque/*.ttf')
        .pipe(gulp.dest('dist/fonts/BrandonGro'))
});

gulp.task('faMinCSS', function () {
    gulp.src('app/fonts/fontawesome/css/*.css')
        .pipe(concat('fa.all.css'))
        .pipe(minCSS())
        .pipe(gulp.dest('dist/fonts/fontawesome'))
});

gulp.task('moveFA', function () {
    gulp.src('app/fonts/fontawesome/webfonts/**/*')
        .pipe(gulp.dest('dist/fonts/fontawesome/webfonts'))
});