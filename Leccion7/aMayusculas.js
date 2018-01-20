console.log("Descargando el gestor de paquetes uper-case")
var http = require('http')

var uc = require('upper-case')// Libreria para transformar un string a mayusculas

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc("Hello World!"))// cambiar las minusculas a mayusculas
    res.end()
}).listen(8080) 