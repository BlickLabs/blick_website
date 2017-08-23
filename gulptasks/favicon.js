var gulp = require('gulp'),
  paths = require('../gulpconfig').paths;

gulp.task('copy:favicons', function () {
  var dest = paths.build.root

  return gulp.src(paths.src.favicon_folder)
    .pipe(gulp.dest(dest));
});
