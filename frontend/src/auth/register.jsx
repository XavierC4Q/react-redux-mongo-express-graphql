import React from 'react'
import {gql, graphql} from 'react-apollo'
import inputs from 'react-stateless-input'

import {REGISTER_USER} from '../graphql/mutations'

const Register = ({loading, error, register}) => {
  if(loading){
    return(<div>loading load</div>)
  }
  if(error){
    return(<div>the rerrreee</div>)
  }
  return (<div>
    <form onSubmit = {e => {
            e.preventDefault()
            register(inputs().username, inputs().password, inputs().email, inputs().photo)
          }}>
      <div>
        <h3>Username</h3>
        <input type='text' name='username' placeholder='Enter username'></input>
      </div>
      <div>
        <h3>Password</h3>
        <input type='text' name='password' placeholder='Enter password'></input>
      </div>
      <div>
        <h3>Email</h3>
        <input type='text' name='email' placeholder='Enter email'></input>
      </div>
      <div>
        <h3>Photo</h3>
        <input type='text' name='photo' placeholder='Enter photo'></input>
      </div>
      <button type='submit'>Submit</button>
    </form>
  </div>)
}

const RegisterPage = graphql(REGISTER_USER, {
  props: ({loading, error, mutate}) => ({
    register: (username, password, email, photo) => mutate({
      variables: {
        username,
        password,
        email,
        photo
      }
    }).then(({data}) => {
      console.log('success', data)
    }).catch((error) => {
      console.log('fail register', error)
    })
  })
})(Register)

export default RegisterPage
