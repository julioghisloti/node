var http = require('http');

var server =  http.createServer(function(request, response){

	response.writeHead(200, {"Content-Type": "text/html"});

	if(request.url == "/"){

		response.write("<html><body><h1>Olá Node.js!</h1>");
		response.write("<a href='/bemvindo'>Bem Vindo</a>");
		response.write("</body></html>");

	}else if(request.url == "/bemvindo"){

		response.write("<h1>Bem Vindo</h1>");

	}else{

		response.write("<h1>Eicha</h1>");

	}

	response.end();

});

server.listen(3000, function(){
	console.log('Executando Server HTTP');
});