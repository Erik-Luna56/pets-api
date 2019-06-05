const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://pets-api:Cervantes56@primerbd-amssk.mongodb.net/test?retryWrites=true&w=majority'
// promesa
const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, (error) => {
    if (error) return reject(error)
    resolve('todo salio bien')
  })
})

module.exports = {
  connect
}
