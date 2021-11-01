import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App'
import './sanitize.css'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './shared/history'
import store from './redux/store'
import './base.styles.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
