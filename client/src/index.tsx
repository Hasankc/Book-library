/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {logout}  from './redux/auth/action'

axios.interceptors.request.use(
  request => {
    const token = localStorage.getItem('access_token')

    if (token) {
      request.headers = {
        Authorization: `Bearer ${token}`,
      }
    }

    return request
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status === 401) {
      localStorage.removeItem('access_token')
      store.dispatch(logout())
    }

    return response
  },
  error => {
    return Promise.reject(error)
  }
)

axios.defaults.baseURL = 'http://localhost:5000/api/v1'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)