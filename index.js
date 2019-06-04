const { server, port } = require('./src/server')

server.listen(port, () => console.log(`express esta escuchando en el puerto: ${port}`))
