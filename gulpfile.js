let gulp       = require('gulp');
let clean      = require('gulp-clean');
let concat     = require('gulp-concat');
let watch      = require('gulp-watch');
let uglify     = require('gulp-uglify');
let shell      = require('shelljs');

const FILE_NAME = shell.exec('whoami')

gulp.task('clean', function () {
  return gulp.src('build/*.*', { read: false })
    .pipe(clean());
});

gulp.task('cancatUglify', ['clean'], function () {
	return gulp.src([
      'source/one.js',
      'source/two.js',
      'source/three.js'])
  	.pipe(concat(`${FILE_NAME}.min.js`))
  	.pipe(uglify({mangle: {toplevel: true}}))
  	.pipe(gulp.dest('build'));
});

gulp.task('run', ['clean', 'cancatUglify'], function () {
  shell.exec(`node 'build/${FILE_NAME}.min.js'`);
})

gulp.task('default', ['clean', 'cancatUglify' ,'run']);
