import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router'
import { connect } from 'react-redux'

import LandingPage from './landing'
import LoginPage from './auth/login'
import RegisterPage from './auth/register'

class App extends Component {
  render(){
    return(
      <div>
        <Route path='/' component = {LandingPage}/>
        <Route path='/auth/login' component = {LoginPage}/>
        <Route path='/new/register' component = {RegisterPage}/>
      </div>
    )
  }
}

export default connect()(App);
