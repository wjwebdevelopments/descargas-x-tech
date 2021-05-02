const { series, dest, src, watch } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

const paths = {
  scss: 'public/scss/**/*.scss',
  js: 'public/js/**/*.js'
}

function css() {
  return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass())
    // .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(rename('bundle.css'))
    .pipe(dest('./public/dist/'))
}

function javascript() {
  return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./public/dist/'))
}

function watchCss() {
  watch(paths.scss, css);
  watch(paths.js, javascript);
}

exports.default = series(css, javascript, watchCss);
