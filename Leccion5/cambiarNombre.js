var fs = require('fs')

fs.rename('mynewfile.txt', 'myrenamedfile.txt', function (err) { // toma el 'myfile1.txt' y lo renombra a 'myrenamedfile.txt
  if (err) throw err // en caso de no existir tal archivo marca error
  console.log('Archivo Renombrado!')
})