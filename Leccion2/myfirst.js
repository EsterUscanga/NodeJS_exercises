
console.log("Agregando un modulo de http")

var http = require('http')

Console.log("Creando un objeto servidor")
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})// responder a la pagina
    res.end('Hello World!') 
}).listen(8080)// el objeto permite que se pueda acceder desde un buscardor en el puerto 8080