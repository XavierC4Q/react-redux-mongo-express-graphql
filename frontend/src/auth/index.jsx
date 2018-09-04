import React from 'react'
import { Route, Switch } from 'react-router'
import LoginPage from './login'
import RegisterPage from './register'

class AuthIndex extends React.Component {
  render(){
    return(
      <div>
        <Switch>
          <Route path='/test/login' component={LoginPage}/>
          <Route path='/test/register' component={RegisterPage}/>
        </Switch>
      </div>
    )
  }
}

export default AuthIndex
