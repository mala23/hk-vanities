const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Plate = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true },
)

module.exports = mongoose.model('plates', Plate)
