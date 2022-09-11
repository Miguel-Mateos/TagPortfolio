import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context/ContextApi'
import './index.css'
import { Layout } from './Layout/v2/Layout'
const env = import.meta.env.VITE_ENV
import { Home } from './Pages/v2/Home'
import { Router } from './Pages/v2/Router/Router'

const RootSelector = () => {
  if (env === 'v2') return <Router />
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
