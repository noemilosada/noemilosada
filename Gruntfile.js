module.exports = function(grunt) {

  /**
   * Grunt init configuration
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* JSHINT - syntax checking
    ------------------------------------------ */
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js' ]
    }

  });

  /**
   * Load plugin tasks
   */
  grunt.loadNpmTasks('grunt-contrib-jshint');

  /**
   * Register tasks
   */
  grunt.registerTask('build', ['jshint']);

// END Grunt module
};
