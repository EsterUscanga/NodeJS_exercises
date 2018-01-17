var fs = require('fs')

fs.writeFile('mynle3.txt', 'This is my text', function (err) { // rempalzar contenido del archivo (sino esta crea uno adicional)
  if (err) throw err
  console.log('Remplazado')
}) 