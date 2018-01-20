var fs = require('fs')

fs.appendFile('mynewfile.txt', ' Este texto lo acabo de escribir.', function (err) { // Anadir contenido en el archivo sin borrar el anterior
  if (err) throw err
  console.log('Actualizado!')
})