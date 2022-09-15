import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context/ContextApi'
import './index.css'
const env = import.meta.env.VITE_ENV

const Maintainment = () => {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <h1>Page Under Maintenance</h1>
      <picture>
        <source srcSet="/tree.png" media="(max-width: 600px)" />
        <img src="/tree.png" style={{ height: '10vh', width: 'auto' }} />
      </picture>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
