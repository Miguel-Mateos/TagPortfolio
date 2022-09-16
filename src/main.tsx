import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { AppProvider } from './Context/ContextApi'
import { AppProviderV2 } from './Context/ContextV2'
// import { Router } from './Pages/v2/Router/Router'
// import App from './App'

const env = import.meta.env.VITE_ENV
const mobile = window.innerWidth < 768
import './index.css'

const RootSelector = () => {
  if (env === 'v2' && !mobile) {
    const Router = React.lazy(() => import('./Pages/v2/Router/Router'))
    return (
      <AppProviderV2>
        <Suspense fallback={<div>loading</div>}>
          <Router />
        </Suspense>
      </AppProviderV2>
    )
  }
  const App = React.lazy(() => import('./App'))
  return (
    <AppProvider>
      <Suspense fallback={<div>loading</div>}>
        <App />
      </Suspense>
    </AppProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootSelector />
  </React.StrictMode>
)
