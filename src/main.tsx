import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context/ContextApi'
import { Notification } from './Components/Notification/Notification'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Notification />
      <App />
    </AppProvider>
  </React.StrictMode>
)
