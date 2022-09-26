import { useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { contentMock } from './contentMock'
import './styles.css'

export const CustomChip: React.FC<any> = ({ children }) => (
  <small className="custom-chip">{children}</small>
)

export const CaseStudies = () => {
  const navigate = useNavigate()
  return (
    <div className="case-studies-container" id="casestudies">
      <h2 className="case-studies-title">Projects</h2>
      <div className="case-studies" style={{ display: 'flex', gap: '32px' }}>
        {contentMock.map(
          ({ id, title, chip, subtitle, description, image, ...rest }) => (
            <Card key={id}>
              <div className="card-img-container">
                <img className="card-img" src={image} />
              </div>
              <CustomChip>{chip}</CustomChip>
              <h4 className="card-title">{title}</h4>
              <div className="card-description-container">
                <div className="subtitle">{subtitle}</div>
                <div className="medium card-description-inner">
                  {description}
                </div>
              </div>
              <button
                className="card-button-details"
                onClick={() =>
                  navigate('Study/' + title, {
                    state: { title: rest.contender }
                  })
                }
              >
                See Details
              </button>
            </Card>
          )
        )}
      </div>
    </div>
  )
}
