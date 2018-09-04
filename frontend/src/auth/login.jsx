import React from 'react'
import {gql, graphql, Mutation} from 'react-apollo'
import {LOGIN_USER} from '../graphql/mutations'
import inputs from 'react-stateless-input'

const LoginPage = () => {
  return (<Mutation mutation={LOGIN_USER}>
    {
      (login, {loading, error, data}) => (<div>
        <form onSubmit={e => {
            e.preventDefault()
            const {username, password} = inputs()
            login({
              variables: {
                username: username,
                password: password
              }
            }).then(data => {
              console.log("SUCCESS")
            }).catch(error => {
              console.log("ERROR ERROR ERROR", error)
            })
          }}>
          <div>
            <div>
              <h3>Username</h3>
              <input type='text' name='username' placeholder='Enter your username'></input>
            </div>
            <div>
              <h3>Password</h3>
              <input type='text' name='password' placeholder='Enter your password'></input>
            </div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>)
    }
  </Mutation>)
}


export default LoginPage
