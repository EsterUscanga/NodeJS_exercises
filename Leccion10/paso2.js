const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

const start = 0
const limit = 10

db.serialize(function() {

    db.run("CREATE TABLE lorem (info TEXT)") // Inicializar tabla llamada lorem

    const stmt = db.prepare("INSERT INTO lorem VALUES (?)")

    for (var i = index; i < limit; i++) { // Dejar el nombre var puesto que incrementara el contador
        stmt.run("Ipsum " + i) // llenar tabla de impsum y contador
    }
    stmt.finalize()

    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {// selecciona del renglon rowid todas las id de la tabla lorem
        console.log(row.id + ": " + row.info)//Escribir lo que hay en el renglo id y en el renglon info

    })
})

db.close()