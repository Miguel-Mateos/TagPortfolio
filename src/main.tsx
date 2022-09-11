import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context/ContextApi'
import './index.css'
import { Layout } from './Layout/v2/Layout'
const env = import.meta.env.VITE_ENV
import { Home } from './Pages/v2/Home'

const RootSelector = () => {
  if (env === 'v2')
    return (
      <Layout>
        <Home />
      </Layout>
    )
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>{<RootSelector />}</AppProvider>
  </React.StrictMode>
)
