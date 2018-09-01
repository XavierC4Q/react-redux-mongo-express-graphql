import React from 'react'
import {gql, graphql} from 'react-apollo'
import {LOGIN_USER} from '../graphql/mutations'
import inputs from 'react-stateless-input'

const Login = ({loading, error, login}) => {
  if(loading){
    return(<div>loading load</div>)
  }
  if(error){
    return(<div>the rerrreee</div>)
  }
  return (<div>
    <form onSubmit = {e => {
          e.preventDefault()
          login(inputs().username, inputs().password)
        }}>
      <div>
        <h1>Welcome Back. Login Below</h1>
      </div>
      <div>
        <h3>Username</h3>
        <input type='text' name='username' placeholder='Enter your username'></input>
        <h3>Password</h3>
        <input type='text' name='password' placeholder='Enter your password'></input>
        <button type='submit'>Submit</button>
      </div>
    </form>
  </div>)
}

const LoginPage = graphql(LOGIN_USER, {
  props: ({loading, error, mutate}) => ({
    login: (username, password) => mutate({
      variables: {
        username,
        password
      }
    }).then(({user}) => {
      console.log('success', user)
    }).catch((error) => {
      console.log('failure', error)
    })
  })
})(Login)


export default LoginPage
