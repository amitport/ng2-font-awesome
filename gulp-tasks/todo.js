var gulp = require('gulp');
let gutil = require('gulp-util');
let config = require('../tasks-config.js');


var todo = require('gulp-todo');

gulp.task('todo', () => {
  gulp.src(['**/*.{ts,html,scss}', 'gulpfile.js', '!node_modules/**/*'])
  .pipe(todo())
  .pipe(gulp.dest('./'))
});
