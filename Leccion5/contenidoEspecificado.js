var fs = require('fs'); // fs = system file, creo(?)
 
fs.appendFile('mynewfile.txt', 'hello content!', function (err){ // busca con appendFile el archivo con el contenido 'hello content', sino lo
                                                                // encuentra crea un archivo con el nombre mynewfile
    if (err) throw err;// si encuentra un error lo guarda e intanta ejecutar el codigo sin importar el resultado
    console.log('Guardado!')
})