'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('sass', () => {
    return gulp.src('./static/css/**/base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});