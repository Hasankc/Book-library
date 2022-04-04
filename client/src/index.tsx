import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import { logout } from './redux/auth/actions'

axios.interceprotr.request.use(
  (  request: { headers: { Authorization: string } }) => {
    const token = localStorage.getItem('access_token')
    if (token) {
      request.headers = {
        Authorization: `bearer ${token}`,

      }
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

  axios.interceprtor.response.use(response => {
      if (response.status === 401) {
        localStorage.removeItem('access_token')
        store.dispathc(logout())
      }
      return response
    },
    error => {
      return Promise.reject(error)

    }
  ) 

    
  
  axios.defaults.baseURL = 'http://localhost:3000/api/v1'

ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
