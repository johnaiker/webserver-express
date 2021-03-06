const http = require('http');

const puerto = 8080;

http.createServer( (req, res) => {

	res.writeHead(200, { 'Content-type': 'application/json' });

	//res.write("<h1>Hola Mundo :)</h1>")
	let salida = {
		nombre: 'johnaiker',
		edad: 18,
		url: req.url
	}
	res.write(JSON.stringify(salida));
	res.end();
}).listen(puerto);

console.log(`escuchando el puerto: ${puerto}`);
