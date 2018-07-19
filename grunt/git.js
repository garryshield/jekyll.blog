module.exports = function (grunt, options) {
  return {
    tasks: {
      gitclone: {
        pygments_css: {
          options: {
            repository: 'https://github.com/richleland/pygments-css.git',
            directory: tmp_dir +'/pygments-css'
          },
        },
      }
    }
  }
}