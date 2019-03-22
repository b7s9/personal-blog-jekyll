const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const fontmin = require('gulp-fontmin');
const fs = require('fs');


// const uglifycss = require('gulp-uglifycss');

// --------------------------------------------------------
// JS
// --------------------------------------------------------

gulp.task('js', ()=> {
	return gulp.src('./_js/*.js') // or 'src/**/*.js'
		
		// lint
		.pipe( eslint( {fix:true} ) )
		.pipe( eslint.format() )
		.pipe( eslint.failAfterError() )

		// compile
		.pipe( concat('main.min.js') )
		.pipe( babel({
			presets:['@babel/env']
		}) )
		.pipe( uglify() )
		.pipe( gulp.dest('./assets/js/') );
});

// gulp.task('watch', ()=> {
// 	gulp.watch('./assets/js/**/*.js', ['js']);
// 	gulp.watch('./assets/css/*.+(scss|sass)', ['css']);
// });

// gulp.task('default', ['watch']);


// --------------------------------------------------------
// STYLE
// --------------------------------------------------------

// gulp.task('css', ()=> {
// 	// del(['./build/css/*.+(css|map)']);
// 	return gulp.src('./src/style/*.+(scss|sass)');
		
// });


// --------------------------------------------------------
// Asset Optimization
// --------------------------------------------------------

// gulp.task('font-minify', ()=>{
//     return gulp.src('_fonts/Junicode')
//         .pipe( fontmin({
//             text: ''
//         }) )
//         .pipe( gulp.dest('./assets/fonts/Junicode') )
//     ;
// });

// --------------------------------------------------------
// Helper fn
// --------------------------------------------------------

// const parsehtml = (path) =>{

//     // fs.readFile('path', (err, data) => {
//     //     console.log(data);
//     // });
//     let data = '';
//     let stream = fs.createReadStream(path, {start: 0} );

//     stream.on('data', (chunk)=> {
//         data+=chunk;

//     });

//     stream.on('end', ()=> {
//         console.log(data);
//     });

//     stream.on('error', (err)=> {
//         console.log(err.stack);
//     });

// };

// gulp.task('test', ()=> {
//     parsehtml('about.html');
// });