module.exports = function() {
	// Setup Vars
	var
		gulp    = require('gulp-help')(require('gulp')),
		conf    = require('../../config'),
		gulp_rm = require('../../function/gulp-rm'),
		// Aliases
		build   = conf.build,
		paths   = build.paths;
	
	return gulp.src(paths.dist_scripts, {read: false})
		.pipe(gulp_rm());
};
