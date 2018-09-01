import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory'
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers/rootreducer'
import thunk from 'redux-thunk'
import {Provider as ReduxProvider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  link: new HttpLink({uri: `http://localhost:8080/api`}),
  cache: new InMemoryCache()
})

const storeConfig = () => {
  return createStore(allReducers, {}, applyMiddleware(thunk))
}

const store = storeConfig()

ReactDOM.render(<ApolloProvider client={client}>
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ReduxProvider>
</ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
