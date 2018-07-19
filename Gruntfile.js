module.exports = function (grunt) {

  tmp_dir = 'assets/tmp';
  src_dir = 'assets/src';
  dist_dir = 'assets/dist';
  
  var options = {
    scope: ['devDependencies', 'dependencies' ]
  };
  require('load-grunt-tasks')(grunt, options);
  
  var options = {
    config: { 
      src: 'grunt/*.js' 
    },
    pkg: grunt.file.readJSON('package.json'),
  };
  var configs = require('load-grunt-configs')(grunt, options);

  grunt.initConfig(configs);

  grunt.registerTask('init', ['gitclone']);
  grunt.registerTask('default', ['sass', 'less', 'uglify', 'copy', 'concat', 'cssmin', 'watch']);

};