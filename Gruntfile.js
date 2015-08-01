module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
                files: ['app/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
		},
		sass: {
            dev: {
                options: {
                    style: 'expanded',
                },
                files: {
                    'app/css/style.css': 'app/css/style.scss',
                }
            }
        }
	});

	grunt.registerTask('default', [
		'sass',
		'watch'
		]);

};