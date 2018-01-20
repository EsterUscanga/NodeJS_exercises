
var events = require('events')
var eventEmitter = new events.EventEmitter()

// Creando un manejador de eventos
var myEventHandler = function () {
  console.log('I hear a scream!')
}

//Asignar el controlador de eventos
eventEmitter.on('scream', myEventHandler)

//Disparar el evento
eventEmitter.emit('scream')