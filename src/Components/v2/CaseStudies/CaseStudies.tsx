import { useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import './styles.css'

const CustomChip: React.FC<any> = ({ children }) => (
  <small className="custom-chip">{children}</small>
)

export const CaseStudies = () => {
  const navigate = useNavigate()
  return (
    <div className="case-studies-container" id="casestudies">
      <h2 className="case-studies-title">Projects</h2>
      <div className="case-studies" style={{ display: 'flex', gap: '32px' }}>
        {Array(3)
          .fill(1)
          .map(() => (
            <Card key={Math.random()}>
              <div className="card-img-container">
                <img className="card-img" src="https://picsum.photos/500" />
              </div>
              <CustomChip>Non disclosure agreement</CustomChip>
              <h4 className="card-title">Tag Ds</h4>
              <div className="card-description-container">
                <div className="subtitle">The Adecco Group Design System</div>
                <div className="medium card-description-inner">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nec commodo mauris. Aliquam erat volutpat. Aliquam
                  suscipit in augue et iaculis. Sed non amet.
                </div>
              </div>
              <button
                className="card-button-details"
                onClick={() => navigate('Study/yes')}
              >
                See Details
              </button>
            </Card>
          ))}
      </div>
    </div>
  )
}
