var http = require('http')
var contador = 0

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">' )
    res.write('<p>Este es un parrafo</p>')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    contador++
    console.log("Reenderizando form ", contador)
    return res.end()
}).listen(8087)