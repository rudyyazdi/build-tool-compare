const FILE_NAME = "ruuuud"

var gulp       = require('gulp'),
    clean      = require('gulp-clean'),
    concat     = require('gulp-concat'),
    watch      = require('gulp-watch'),
    uglify     = require('gulp-uglify'),
    exec       = require('child_process').exec;

gulp.task('clean', function () {
  return gulp.src('build/*.*', {read: false})
    .pipe(clean());
});

gulp.task('cancatUglify', ['clean'], function () {
	return gulp.src([
      'source/one.js',
      'source/two.js',
      'source/three.js'])
  	.pipe(concat(`${FILE_NAME}.min.js`))
  	.pipe(uglify())
  	.pipe(gulp.dest('build'));
});

gulp.task('run', ['clean', 'cancatUglify'], function () {
  exec(`node build/${FILE_NAME}.min.js`, function (err, stdout, stderr) {
    console.log(stdout);
  });
})

gulp.task('default', ['clean', 'cancatUglify' ,'run']);
