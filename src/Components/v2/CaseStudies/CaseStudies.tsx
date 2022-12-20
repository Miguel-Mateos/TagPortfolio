import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { SeeMore } from '../SeeMore/SeeMore'
import './styles.css'

export const CustomChip: React.FC<any> = ({ children, className }) => (
  <small title={children} className={`custom-chip ${className ?? ''}`}>
    {children}
  </small>
)

export interface IRepos {
  clone_url: string
  id: number
  name: string
  homepage: string
  private_repo: boolean
  description: string
  created_at: string
  languages_url: string
  topics: string[]
}

export const CaseStudies = () => {
  const [more, setMore] = useState(false)

  const toggleMore = () => setMore(!more)

  const navigate = useNavigate()

  return (
    <div className="case-studies-container" id="casestudies">
      <h2 className="case-studies-title">Projects</h2>
      <div className="case-studies">
        <Card className="case-studies-card">
          <div className="card-img-container">
            <img
              className="card-img"
              // src={`https://raw.githubusercontent.com/${OWNER}/${name}/${BRANCH}/.github/assets/preview.png`}
              src="https://picsum.photos/500?random=2.webp"
              alt="project-image"
              loading="lazy"
            />
          </div>
          <CustomChip>public Repository</CustomChip>
          <div className="card-title">Title</div>
          <div className="card-description-container">
            <div className="subtitle">Subtitle</div>
            <div className="medium card-description-inner">
              There is no short description at the moment
            </div>
          </div>
          <button
            className="button card-button-details"
            onClick={() =>
              navigate('Study/' + 'Loquesea', {
                state: {
                  title: 'Title',
                  owner: 'Miguel Mateos',
                  repo: 'Nombre',
                  branch: 'main',
                  created_at: '2021-01-01',
                  languages_url: '',
                  topics: []
                }
              })
            }
          >
            See Details
          </button>
        </Card>
      </div>
      <SeeMore more={more} setMore={toggleMore} className="study-see-more" />
    </div>
  )
}
