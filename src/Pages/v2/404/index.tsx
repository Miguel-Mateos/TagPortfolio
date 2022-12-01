import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useLocation, useNavigate } from 'react-router-dom'
import './index.css'

export const E404 = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <div role="main">
      <HeadLine title="Bad place to be around" />
      <div className="e-404-container">
        <h1>What were you trying?</h1>
        <h4>
          This path <span>{pathname.replace('/', '')}</span> does not exist.
        </h4>
        <p>I would recommend you to go back and enjoy the real Portfolio!</p>
        <img className="e-404-img" src="/404.png" alt="404" />
        <button
          className="button-icon large e-404-back"
          onClick={() => navigate('/')}
        >
          <span className="material-icons-outlined">arrow_left</span>Back
        </button>
      </div>
    </div>
  )
}
