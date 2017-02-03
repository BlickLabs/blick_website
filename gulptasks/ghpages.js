var gulp = require('gulp'),
  config = require('../gulpconfig'),
  ghPages = require('gulp-gh-pages'),
  fs = require('fs');

gulp.task('deploy', function() {
  try {
    fs.writeFileSync(config.paths.build.root + '/CNAME', config.etc.domain);
    return gulp.src(config.paths.dist.all)
      .pipe(ghPages());
  } catch (e) {
    console.error(e);
  }
});