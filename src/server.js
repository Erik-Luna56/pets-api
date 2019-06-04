// dependencias
const express = require('express')

// nuestros paquetes
let app = express()

// constantes/variables de app

let port = 3000

app.get('/hola', (req, res) => res.json({ message: 'Hola koders' }))

module.exports = {
  server: app,
  port
}
