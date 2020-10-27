const mongoose = require('mongoose')
require('dotenv').config()
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose
  .connect('mongodb+srv://mala23:{ DB_PASSWORD }@hkvanities.j1ozp.mongodb.net/HKVanities?retryWrites=true&w=majority', { useNewUrlParser: true })
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
