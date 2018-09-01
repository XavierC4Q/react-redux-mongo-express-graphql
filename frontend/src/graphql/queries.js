import gql from 'graphql-tag'

export const GET_ALL_USERS = gql `
  query allUsers {
    allUsers {
      username
      email
    }
  }
`


export const GET_SINGLE_USER = gql `
  query getUser($username: String!){
    getUser(username: $username){
      username
      email
    }
  }
`

export const LOGOUT_USER = gql `
  query logout {
    success
  }
`
