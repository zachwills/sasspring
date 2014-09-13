module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed',
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
			my_target: {
				files: {
					'js/scripts.min.js': ['js/global.js']
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'autoprefixer']
			},
			js: {
				files: {
					'js/scripts.min.js': ['js/lazyload.min.js', 'js/global.js']
				},
				tasks: ['uglify']
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}