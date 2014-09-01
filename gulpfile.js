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

gulp.task('sass', function(done) {
    return gulp.src(paths.src + '/sass/*.scss')
    	.pipe($.plumber())
        .pipe($.rubySass({sourcemap: true}))
        .pipe(gulp.dest(paths.tmp + '/css'))
        .pipe($.notify({
            title: 'SASS',
            message: 'SASS compiled!'
        }));
    done(null);
});

gulp.task('styles', ['sass'], function() {
	return gulp.src(vendorCSS.concat([paths.tmp + '/css/*.css']))
		.pipe($.plumber())
		.pipe($.concat(pkg.name + '.css'))
		.pipe($.csso())
		.pipe($.autoprefixer('last 2 versions', '> 1%', 'ie 9'))
		.pipe(gulp.dest(paths.public + '/css'));
});

gulp.task('scripts', function() {
	return gulp.src(vendorJS.concat([paths.src + '/js/**/*.js']))
		.pipe($.plumber())
		.pipe($.concat('weather.js'))
		.pipe(gulp.dest(paths.public + '/js'))
});

gulp.task('build-html', function() {
  var target = gulp.src(paths.www + '/index.html.dist'),
  	  source = gulp.src([paths.public + '/js/**/*.js', paths.public + '/css/**/*.css']);
  return target.pipe($.inject(source, {read:false, relative: true}))
  	.pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(paths.www));
});
