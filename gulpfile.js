/*
 * @Author: arnaud.perrault
 * @Date: 2018-11-07 13:09:48
 * @Last Modified by: arnaud.perrault
 * @Last Modified time: 2018-11-07 13:33:42
 */
const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('build/'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('**/*.ts', ['scripts']);
});

gulp.task('default', ['watch']);