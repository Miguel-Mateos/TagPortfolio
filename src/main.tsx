import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProviderV2 } from './Context/ContextV2'
import Router from './Pages/v2/Router/Router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviderV2>
      <Router />
    </AppProviderV2>
  </React.StrictMode>
)

export const Spinner = () => (
  <div className="spinner-router-container">
    <div className="spinner-router" />
    <div className="router-spinner-text">Loading The Portfolio</div>
  </div>
)
