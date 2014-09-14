module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'uncompressed',
					compass: true
				},
				files: {
					'screen.css' : 'scss/screen.scss'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
		},
		uglify: {
			dist: {
				files: {
					'scripts.min.js': ['js/vendor/jquery-1.11.1.min.js', 'js/global.js']
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer']
			},
			js: {
				files: 'js/*.js',
				tasks: ['uglify']
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'uglify', 'watch']);
}