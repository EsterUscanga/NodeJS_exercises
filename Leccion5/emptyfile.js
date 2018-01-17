var fs = require('fs')

fs.open('mynewfile2.txt', 'w', function(err, file){// abre el archivo con funcion open
    if (err) throw err;// si encuentra un error lo guarda e intanta ejecutar el codigo sin importar el resultado
    console.log('Guardado!')
})