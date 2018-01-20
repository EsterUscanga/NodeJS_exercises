const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

const portNumber = 8087
const fileUpload = '/fileupload' 
const myPath = '/home/ester/Estancias/NodeJS_exercises/Archivo_'
const confirmationMessage = 'File uploaded and moved!'
const statusCode = 200
const headers = {'Content-Type': 'text/html'}

function createUploadFileServer(req, res) {
  if (req.url == fileUpload) {
    const form = new formidable.IncomingForm()
    form.parse(req, function (err, fields, files) {
      const oldPath = files.filetoupload.path
      const newPath = myPath + files.filetoupload.name
      fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        res.write(confirmationMessage)
        res.end()
      })
 })
  } else {
    res.writeHead(statusCode, headers)
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit">')
    res.write('</form>')
    return res.end()
  }
}
http.createServer(createUploadFileServer).listen(portNumber)