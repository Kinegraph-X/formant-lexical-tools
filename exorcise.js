module.exports = function(grunt, options) {

	return {
		debug: {
			options: {},
			files: {
				'<%=pathToProject%>js/<%=currentProject%>.debug.js.map': ['<%=pathToProject%>js/<%=currentProject%>.debug.js']
			}
		},
		release: {
			options: {},
			files: {
				'<%=pathToProject%>js/<%=currentProject%>.dist.js.map': ['<%=pathToProject%>js/<%=currentProject%>.dist.js']
			}
		}
	}
};