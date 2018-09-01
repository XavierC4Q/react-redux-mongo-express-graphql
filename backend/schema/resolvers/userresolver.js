const User = require('../../models/users')
const passport = require('passport')

module.exports = {
  Query: {
    getUser: async (obj, args, context, info) => {
      let user = await User.findOne({
        username: args.username
      })
      return user
    },
    allUsers: (obj, args, context, info) => {
      return User.find()
    },
    logOut: async (obj, args, context, info) => {
      if (context.req.session.passport) {
        await context.req.session.destroy()
        return "Logged out"
      } else {
        return "Not logged in"
      }
    },
    isLoggedIn: (obj, args, context, info) => {
      if (context.req.session.passport) {
        return true
      }
      else {
        return false
      }
    }
  },
  Mutation: {
    register: async (obj, args, context, info) => {
      let usernameTaken = await User.findOne({
        username: args.username
      })
      if (!usernameTaken) {
        let newUser = new User({
          username: args.username,
          email: args.email
        })
        await newUser.setPassword(args.password)
        await newUser.save()
        return newUser
      }
    },
    login: async (obj, args, context, info) => {
      if (!context.req.session.passport) {
        let loginUser = new Promise(function(resolve, reject) {
          User.authenticate('local')(args.username, args.password, async function(error, user) {
            if (error) {
              reject(error)
            }
            if (!user) {
              reject("Invalid")
            }
            context.req.logIn(user, async function(error) {
              if (error) {
                reject(error)
              } else {
                resolve(user)
              }
            })
          })
        })
        let user = Promise.resolve(loginUser)
          .then(async () => {
            let findUser = await User.findOne({
              username: args.username
            })
            if (!findUser) {
              return {
                user: "Not found"
              }
            } else {
              return findUser
            }
          })
          .catch(error => {
            return error
          })
          return user
      } else {
        throw new Error("Logged in already")
      }
    }
  }
}
