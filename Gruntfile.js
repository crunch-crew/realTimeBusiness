module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'client/js/scripts.min.js' : 'client/js/scripts.js'
        }
      }
    },
    browserify: {
      release: {
        options: {
          browserifyOptions: {
            debug: true,
            transform: ['reactify'],
            extensions: ['.jsx']
          }
        },
        files: {
          'client/js/scripts.js' : 'src/Router.jsx'
        }
      }
    }
    
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', [ 'browserify']);
}