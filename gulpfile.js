var gulp	= require('gulp'),
	pkg 	= require('./package.json'),
	$		= require('gulp-load-plugins')({
          		pattern: 'gulp-*',
            	camelize: true
        	});

var paths = {
	"www": 		"./app",
	"public": 	"./app/public",
	"src": 		"./app/assets",
	"sys": 		"./app/system",
	"tmp": 		"./tmp",
	"vendor": 	"./vendor", 
},

vendorCSS = [ paths.vendor + '/normalize.css/normalize.css' ],
vendorJS  = [ paths.vendor + '/angular/angular.min.js' ];

gulp.task('clean-public', function() {
	return gulp.src(paths.public)
		.pipe($.rimraf({force:true}));
});

gulp.task('clean-tmp', function() {
	return gulp.src(paths.tmp)
		.pipe($.rimraf({force:true}));
});

gulp.task('styles', function(done) {
    return gulp.src(paths.src + '/sass/*.sass')
    	.pipe($.plumber())
        .pipe($.rubySass({sourcemap: true}))
        .pipe($.autoprefixer('last 2 versions', '> 1%', 'ie 9'))
        .pipe(gulp.dest(paths.public + '/css'))
        .pipe($.notify({
            title: 'SASS',
            message: 'SASS compiled!'
        }));
    done(null);
});

gulp.task('scripts', function() {
	return gulp.src(vendorJS.concat([ paths.sys + '/app.js', paths.sys + '/**/*.js']))
		.pipe($.plumber())
		.pipe($.concat('weather.js'))
        .pipe($.uglify({mangle:false}))
		.pipe(gulp.dest(paths.public + '/js'))
		.pipe($.notify({
            title: 'Scripts',
            message: 'Everything done!'
        }));
});

gulp.task('fonts', function() {
	gulp.src(paths.src + '/fonts/*')
		.pipe(gulp.dest(paths.public + '/fonts'))
})

gulp.task('images', function() {
    gulp.src(paths.src + '/images/*')
        .pipe(gulp.dest(paths.public + '/images'))
})

gulp.task('build-html', function() {
	var target = gulp.src(paths.www + '/index.html.dist'),
  	    source = gulp.src([paths.public + '/js/**/*.js', paths.public + '/css/**/*.css']);
	return target.pipe($.inject(source, {read:false, relative: true}))
		.pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
		.pipe($.rename('index.html'))
		.pipe(gulp.dest(paths.www))
		.pipe($.notify({
	    	title: 'HTML',
	    	message: 'HTML built!'
		}));
});

gulp.task('build', function(done) {
	$.runSequence(['clean-tmp', 'clean-public'], ['fonts', 'images', 'styles', 'scripts'], ['build-html'], ['clean-tmp']);
});