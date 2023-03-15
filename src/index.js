import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'
import { CartProviderWrapper } from './contexts/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <CartProviderWrapper>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </CartProviderWrapper>
    </Router>
  </React.StrictMode>
)
