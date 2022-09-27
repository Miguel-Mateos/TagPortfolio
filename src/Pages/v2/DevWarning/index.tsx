import { useState } from 'react'
import './styles.css'

export const DevWarning: React.FC = () => {
  const [show, setShow] = useState(!localStorage.getItem('d_w_f_e'))
  const handleClick = () => {
    if (!localStorage.getItem('d_w_f_e'))
      localStorage.setItem('d_w_f_e', 'true')
    setShow(false)
  }
  return show ? (
    <div className="dev-warning">
      <div>
        <h3>Page Under Development</h3>
        <p>
          This page is still under development. Please take into account if bugs
          or errors are found.
        </p>
        <p>
          The previous version of the project can be found initializing the web
          in mobile mode.
        </p>
      </div>
      <button className="large dev-warning-button" onClick={handleClick}>
        Close
      </button>
    </div>
  ) : null
}
