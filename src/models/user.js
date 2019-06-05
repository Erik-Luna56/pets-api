const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    minlenght: 2
  },
  lastName: {
    type: String
  },
  age: {
    type: Number
  },
  address: {
    homeNum: Number,
    state: String,
    postalCode: Number
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  },
  description: {
    hobbies: String,
    briefDesc: String
  },
  userName: {
    type: String
  },
  password: {
    type: String
  }

})

module.exports = {
  schema: userSchema,
  model: model('Users', userSchema)
}
