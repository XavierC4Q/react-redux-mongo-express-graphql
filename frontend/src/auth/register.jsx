import React from 'react'
import {gql, graphql, Mutation} from 'react-apollo'
import inputs from 'react-stateless-input'

import {REGISTER_USER} from '../graphql/mutations'

const RegisterPage = () => {
  return (<Mutation mutation={REGISTER_USER}>
    {
      (register, { loading, error, data }) => (<div>
        <form onSubmit={e => {
            e.preventDefault()
            const {username, password, email, photo} = inputs()
            console.log("VARIABLES", username,email,password)
            register({
              variables: {
                username: username,
                password: password,
                email: email,
                photo: photo
              }
            }).then(data => {
              console.log('here is monique', data)
            }).catch((error) => {
              console.log('ENERGY ERROR', error)
            })
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
  </Mutation>)
}

export default RegisterPage
