module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        var serveStatic = require('serve-static');
                        return [
                            //require('grunt-connect-prism/middleware'),
                            require('grunt-connect-prism/middleware'),
                            connect().use('/bower_components', serveStatic('./bower_components')),
                            //connect().use('/images', connect.static('./images')),
                            //connect().use('/data', connect.static('./data')),
                            connect().use('/app', serveStatic('./app')),
                            serveStatic('app')
                        ];
                    }
                }
            }
        },
        watch: {
            main: {
                options: {
                    livereload: true,
                    livereloadOnError: true,
                    spawn: false
                },
                files: ['app/**/*.less', 'app/**/*.js', 'app/**/*.html'],
                tasks: [] //all the tasks are run dynamically during the watch event handler
            }
        }
    });

    grunt.registerTask('serve', ['connect', 'watch']);

};