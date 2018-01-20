var fs = require('fs')

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) { // Sobreescribe el archivo. Sino existe se creara uno nuevo
  if (err) throw err
  console.log('guardado!')
}) 