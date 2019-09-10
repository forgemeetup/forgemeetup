// theme_assets
// Move the necessary images to the theme folder ('Evie/assets')

const gulp = require('gulp');

gulp.task('theme_assets', function(done){
	gulp.src(['src/theme/assets/**/*']).pipe(gulp.dest('docs/')); // Transfer every asset
	return gulp.src(['./README.md',"./LICENSE"], { allowEmpty: true }).pipe(gulp.dest('docs/')); // Transfer readme and license
});