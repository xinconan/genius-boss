import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css';
// import App from './App';
import Login from './container/login/login'
import Register from './container/register/register'
import User from './container/user/user'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import AuthRoute from './components/authRoute/authRoute'

import reducers from './reducer'
import './config'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path="/" exact component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/user" component={User}/>
        <Route path="/bossinfo" component={BossInfo}/>
        <Route path="/geniusinfo" component={GeniusInfo}/>
      </div>
    </BrowserRouter>
  </Provider>  
),
  document.getElementById('root'));
