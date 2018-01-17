console.log("Dividira la direccion en tres partes")

var url = require('url')
var adr = 'http://localhost:8080/default.htm?year=2017&month=february'
var q = url.parse(adr, true)

console.log(q.host) //'localhost:8080'
console.log(q.pathname) // '/default.htm'
console.log(q.search) // '?year=2017&month=february'

console.log("")

var qdata = q.query //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month) //returns 'february'