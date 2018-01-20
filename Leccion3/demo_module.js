
var http = require('http')
console.log("Abriendo un modulo de otro archivo que devuelve la hora y la fecha")
var dt = require('./myfirstmodule')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("La hora y fecha actual: " + dt.myDateTime())// respondiendo lo que obtiene de ejecutar la funcion
    res.end()
}).listen(8080)