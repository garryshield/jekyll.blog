module.exports = function (grunt, options) {
  return {
    tasks: {
      uglify: {
        options: {
          manage: false,
          preserveComments: 'all'
        },
        main: {
          files: [{
            expand: true,
            cwd: src_dir,
            src: ['js/**/*.js'],
            dest: dist_dir,
            ext: '.min.js',
          }]
        }
      }
    }
  }
}