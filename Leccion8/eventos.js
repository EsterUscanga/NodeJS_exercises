
var fs = require('fs')
var rs = fs.createReadStream('./demofile.txt') // primero debe ser creado demofile.txt 
rs.on('open', function () { // abrir archivo
  console.log('el Archivo esta abierto')
}) 