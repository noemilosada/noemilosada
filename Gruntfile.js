module.exports = function(grunt) {

  /**
   * Grunt init configuration
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /* JSHINT - syntax checking
    --------------------------------------------- */
    jshint: {
      all: ['Gruntfile.js', 'assets/js/**/*.js', '!assets/js/**/*.min.js' ]
    },

    /* CLEAN - remove files before minification
    --------------------------------------------- */
    clean: ['assets/css/*.css', 'assets/js/*.min.js'],

    /* LESS - files from less to css
    --------------------------------------------- */
    less: {
      production: {
        files: {
          "assets/css/theme.css": "assets/less/theme.less"
        } 
      }
    },

    /* CSSMIN - minify css files
    --------------------------------------------- */
    cssmin: {
        minify: {
            expand: true,
            cwd:'assets/css/',
            src: ['*.css', '!/.min.css'],
            dest:'assets/css/',
            ext:'.min.css'
        }
    },

    /* UGLIFY - minify js files
    --------------------------------------------- */
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /**
   * Register tasks
   */
  grunt.registerTask('build', ['jshint', 'clean', 'less', 'cssmin', 'uglify']);
  grunt.registerTask('css', ['clean', 'less', 'cssmin']);
  grunt.registerTask('js', ['jshint', 'clean', 'uglify']);

// END Grunt module
};
