module.exports =  `
  type User {
    username: String!
    password: String!
    email: String!
  }

  type Query {
    getUser(username: String!): User
    allUsers: [User]
    logOut: String!
  }

  type Mutation {
    register(username: String!, password: String!, email: String!): User!
    login(username: String!, password: String!): User
  }
`
