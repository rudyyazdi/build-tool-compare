## compare build tools

This is a repo demonstrating the difference of a few build tools, namely: Rake, Ant, Gulp.

This repo was created for my talk at roro Sydney Meetup. Read the whole article [on medium.](https://medium.com/@rudyyazdi/rake-gem-explained-ebee7e6e6f72#.y0t1zwwvd)

## Goal

The build tool should:

1. Clear the `build` folder.
2. Concatenate all the files.
3. Uglify the result.
4. Dump everything in a `.js` file.
5. Name the file the result of `whoami` command in the command line at the time of build.
6. Put the file in the build folder.
7. Run the minified file.
