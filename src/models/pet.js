
const { Schema, model } = require('mongoose')

const petSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50
  },
  age: {
    type: Number,
    min: 1
  },
  size: {
    small: Number,
    medium: Number,
    big: Number
  },
  specie: {
    type: String
  },
  breed: {
    type: String
  },
  status: {
    available: Boolean
  },
  description: {
    colorFur: String,
    colorEyes: String,
    briefDesc: String
  }
})

module.exports = {
  schema: petSchema,
  model: model('Pets', petSchema)
}
