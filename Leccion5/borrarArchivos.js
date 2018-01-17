var fs = require('fs')

fs.unlink('mynewfile2.txt', function (err) { //eliminar archivo con tal nombre
  if (err) throw err // si el archivo no existe sale error
  console.log('Archivo detectado!')
})