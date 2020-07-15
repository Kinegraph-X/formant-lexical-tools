module.exports = function(grunt, options) {

	return {
		debug: {
			files: {
				'<%=pathToProject%>js/<%=currentProject%>.debug.js': ['<%=pathToProject%>src/index.js']
			},
			options: {
				browserifyOptions: {
					debug: true,
					paths : options.browserifyPath
				},
				preBundleCB : function(b) {

				},
				plugin: [
					'browserify-derequire'
				],
                transform: ['stringify']
			}
		},
		release: {
			files: {
				'<%=pathToProject%>js/<%=currentProject%>.dist.js': ['<%=pathToProject%>src/index.js']
			},
			options: {
				browserifyOptions: {
					paths : options.browserifyPath
				},
				preBundleCB : function(b) {

				},
				plugin: [
					'browserify-derequire', 'bundle-collapser/plugin'
				],
                transform: ['stringify']
			}
		}
	}
};