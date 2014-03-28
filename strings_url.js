var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){

	//Parse da String url digitada
	var result = url.parse(request.url, true);

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Dados da Query</h1>");
	//itera o resultado dos parametros via query string.
	for(var key in result.query){
		response.write("<h2>" +key+ ":" +result.query[key]+ "</h2>")
	}

	response.end();

});

server.listen(3000, function(){
	console.log('Executando Server');
});
