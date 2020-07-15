module.exports = function(grunt, options) {

	return {
		debug: {
			files: [
				'plugins_spip/*.js'
			],
			tasks: [
			    'browserify:debug',
			    'copy:localRelease'
			]
		}
	}
}