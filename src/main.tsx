import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context/ContextApi'
import './index.css'
import { Testing } from './Testing'
const env = import.meta.env.VITE_ENV

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>{env === 'isolated' ? <Testing /> : <App />}</AppProvider>
  </React.StrictMode>
)
