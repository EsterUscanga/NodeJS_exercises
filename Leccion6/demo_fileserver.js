var http = require('http')
var url = require('url')
var fs = require('fs')

console.log("Abre el archivo solicitado y devuelve el contenido")

http.createServer(function (req, res) {
  var q = url.parse(req.url, true) // dividimos la URL
  var filename = "." + q.pathname
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      return res.end("404 Not Found") // si algo va mal lanza error
    } 
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    return res.end()
  })
}).listen(8080) 