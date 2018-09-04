import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router'
import {connect} from 'react-redux'

import LandingPage from './landing'
import AuthIndex from './auth/index'

class App extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/test' component={AuthIndex}/>
        <Route path='/test' component={AuthIndex}/>
      </Switch>
    </div>)
  }
}

export default connect()(App);
