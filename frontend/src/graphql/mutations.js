import gql from 'graphql-tag'

export const LOGIN_USER = gql `
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password ) {
      username
    }
  }
`

export const REGISTER_USER = gql `
    mutation register($username: String!, $password: String!, $email: String!, $photo: String!) {
      register(username: $username, password: $password, email: $email, photo: $photo){
        id
        username
        email
      }
    }
`
