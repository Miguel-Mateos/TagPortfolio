import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProviderV2 } from './Context/ContextV2'
import Router from './Pages/v2/Router/Router'
// eslint-disable-next-line import/no-absolute-path
import logo from '/Logo.svg'
import './index.css'

const WaitForSplashScreen = () => {
  const isFirstOpen = sessionStorage.getItem('isFirstOpen')
  const [show, setShow] = React.useState(Boolean(isFirstOpen))
  React.useEffect(() => {
    if (isFirstOpen === null)
      setTimeout(() => {
        setShow(true)
        sessionStorage.setItem('isFirstOpen', 'true')
      }, 3000)
  }, [])
  return show ? (
    <Router />
  ) : (
    <div className="splash-screen">
      <div className="splash-screen-logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviderV2>
      <WaitForSplashScreen />
    </AppProviderV2>
  </React.StrictMode>
)

export const Spinner = () => (
  <div className="spinner-router-container">
    <div className="spinner-router" />
    <div className="router-spinner-text">Loading The Portfolio</div>
  </div>
)
