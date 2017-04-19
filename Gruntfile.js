module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   build: {
    //     src: ['client/scripts/*.js',
    //           'client/scripts/**/*.js'],
    //     dest: 'server/public/scripts/client.min.js'
    //   }
    // },
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html'],
        dest: 'server/public/views/'
      },
      scripts: {
        expand: true,
        cwd: 'client/scripts',
        src: ['client.js',
              'Factory/*.*',
              'Controllers/*.*'],
        dest: 'server/public/scripts/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/bootstrap.css',
              'js/bootstrap.js'],
        dest: 'server/public/vendors/bootstrap/'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      }
    },
    watch: {
      files: [
        'client/**/**/*.*',
      ],
      tasks: ['copy']
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'watch']);
};
