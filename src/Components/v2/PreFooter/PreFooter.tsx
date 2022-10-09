import { useNavigate } from 'react-router-dom'
import './styles.css'

export const PreFooter = () => {
  const navigate = useNavigate()
  return (
    <div className="prefooter-container">
      <div className="prefooter">
        <h2>{"Let's Book a Call"}</h2>
        <p className="base">
          Would you like to chat and get to know me a bit better? Don&apos;t
          hesitate. Come in and book a call with me!
        </p>
        <button
          className="button-primary_large"
          onClick={() => navigate('Book')}
        >
          Start <span className="material-icons">trending_flat </span>
        </button>
      </div>
    </div>
  )
}
