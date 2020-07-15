module.exports = function (grunt) {
	return {
		localRelease: {
			files : [
				{
				expand: true,
				cwd: '<%=pathToProject%>js',
				src: [
					'<%=currentProject%>.debug.js', '<%=currentProject%>.debug.js.map',
					'<%=currentProject%>.dist.js', '<%=currentProject%>.dist.js.map'
					],
				dest: '<%=localDeployPath%><%=currentProject%>/js',
				filter: 'isFile'
				},
				{
				expand: true,
				cwd: '<%=pathToProject%>',
				src: ['<%=currentProject%>.html'],
				dest: '<%=localDeployPath%><%=currentProject%>',
				filter: 'isFile'
				}
			]
		}
	};
}