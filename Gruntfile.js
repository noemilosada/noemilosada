module.exports = function(grunt) {

  /**
   * Grunt init configuration
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* JSHINT - syntax checking
    ------------------------------------------ */
    jshint: {
      all: ['Gruntfile.js', 'assets/js/**/*.js' ]
    },

    /* LESS - files from less to css
    ------------------------------------------ */
    less: {
      production: {
        options: {
          cleancss: true
        },
        files: {
          "assets/css/theme.css": "assets/less/theme.less"
        } 
      }
    },

    /* UGLIFY - minify js files
    ------------------------------------------ */
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/theme.min.js': ['assets/js/theme.js']
        }
      }
    }

  });

  /**
   * Load plugin tasks
   */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /**
   * Register tasks
   */
  grunt.registerTask('build', ['jshint', 'less', 'uglify']);

// END Grunt module
};
