const mongoose = require('mongoose')
const PptLclMon = require('passport-local-mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

UserSchema.plugin(PptLclMon)


const User = mongoose.model('User', UserSchema)

module.exports = User
