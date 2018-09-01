const mongoose = require('mongoose')
const PassportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo: {
    type: String
  }
})

UserSchema.plugin(PassportLocalMongoose)


const User = mongoose.model('User', UserSchema)

module.exports = User
