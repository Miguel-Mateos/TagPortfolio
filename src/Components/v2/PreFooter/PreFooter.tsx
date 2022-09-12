import { useNavigate } from 'react-router-dom'
import './styles.css'

export const PreFooter = () => {
  const navigate = useNavigate()
  return (
    <div className="prefooter-container">
      <div className="prefooter">
        <h2>{"Let's Book a Call"}</h2>
        <p className="base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae est
          earum consequuntur, cupiditate facilis repellat praesentium
          exercitationem ratione, veritatis autem delectus similique impedit
          eveniet. Perferendis atque consectetur minima nulla nemo.
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
