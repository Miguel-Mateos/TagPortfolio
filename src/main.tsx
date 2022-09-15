import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProvider } from './Context/ContextApi'
import { AppProviderV2 } from './Context/ContextV2'
import { Router } from './Pages/v2/Router/Router'
import App from './App'

const env = import.meta.env.VITE_ENV

import './index.css'

const RootSelector = () => {
  if (env === 'v2')
    return (
      <AppProviderV2>
        <Router />
      </AppProviderV2>
    )
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootSelector />
  </React.StrictMode>
)
