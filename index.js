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
	if(path.substring(0,6) == '/Page/'){
		// the old URL structure
		return {
			status: 302,
			headers: {
				Location: path.substring(5)
			},
			body: []
		}
	}
	var vars = {};
	try{
		var content = fs.readFileSync(
			path == '/' ? "pages/index.md" :
				path[path.length - 1] == '/' ? 
					'..' + path + "/README.md":
					'pages' + decodeURIComponent(path) + '.md', "utf8");
	
	}catch(e){
		return {
			status: 404,
			headers: {},
			body: ["Not found"]
		};
	}
	vars.content = showdown.makeHtml(content);
	vars.projectDocs = path.length > 1 && path[path.length - 1] == '/';
	vars.path = decodeURIComponent(path).replace(/\//g, ' ');
	var body = template.replace(/\{\{([^}]+)\}\}/g, function(t, name){
			return vars[name];
		});
	return {
		status: 200,
		body: body,
		headers: {
			"content-type": "text/html",
			"content-length": body.length 
		}
	}
}, {port: require("perstore/util/settings").port});
