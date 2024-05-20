const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"));
const {task} = require("gulp")

task("sass", ()=>{
    return gulp.src("src/styles/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles'));
})

gulp.watch(["src/styles/**/*.scss"],{ignoreInitial: false}, gulp.series("sass"))