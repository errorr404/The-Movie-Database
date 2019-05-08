import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux';
import './index.css'
import reducer from './reducers'
const store = createStore(reducer);

ReactDOM.render(
  
  <Provider store={store}>
  <Router>
    <App />
    </Router>
  </Provider>

  , document.getElementById('root'));
