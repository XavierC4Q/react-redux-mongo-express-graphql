import gql from 'graphql-tag'

export const ALL_USERS = gql(`
  query allUsers{
    user {
      username
      email
    }
  }
  `)
