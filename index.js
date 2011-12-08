// helpful for debugging
var Static = require("pintura/jsgi/static").Static,
	fs = require("fs"),
	template = fs.readFileSync("template.html", "utf8"),
	staticHandler = Static({urls:[""], root: "../", directoryListing: true}),
	showdown = new (require("showdown").Showdown.converter)();

require("jsgi-node").start(function(request){
	var path = request.pathInfo;
	if(path.indexOf('.') > 0){
		return staticHandler(request);
	}
	var vars = {};
	try{
		var content = fs.readFileSync(
			path == '/' ? "pages/index.md" :
				path[path.length - 1] == '/' ? 
					'..' + path + "/README.md":
					'pages' + path + '.md', "utf8");
	
	}catch(e){
		return {
			status: 404,
			headers: {},
			body: ["Not found"]
		};
	}
	vars.content = showdown.makeHtml(content);
	vars.projectDocs = path.length > 1 && path[path.length - 1] == '/';
	vars.path = path.replace(/\//g, ' ');
	var body = template.replace(/\{\{([^}]+)\}\}/g, function(t, name){
			return vars[name];
		});
	return {
		status: 200,
		body: body,
		headers: {
			"content-length": body.length 
		}
	}
});
