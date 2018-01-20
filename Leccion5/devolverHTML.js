var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
    fs.readFile('demofile.html', function(err, data){ //le el archivo que tiene nombre demofile y mostrara el contenido del HTML
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data)
        res.end()
    })
}).listen(8080)