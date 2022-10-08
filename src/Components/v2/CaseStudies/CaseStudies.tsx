import Loader from '@TagDs/components/loader/loader'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../Card/Card'
import { SeeMore } from '../SeeMore/SeeMore'
import './styles.css'

const OWNER = 'Eneko96'
const REPO = 'portfolio'
const BRANCH = 'main'

export const CustomChip: React.FC<any> = ({ children, className }) => (
  <small className={`custom-chip ${className ?? ''}`}>{children}</small>
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
  const [repos, setRepos] = useState<IRepos[]>([])
  const [more, setMore] = useState(false)

  const toggleMore = () => setMore(!more)

  useEffect(() => {
    const getRepos = async () => {
      const repos = await fetch(import.meta.env.VITE_GITHUB_URI)
      const res = await repos.json()
      setRepos(res)
    }
    getRepos()
  }, [])

  const memoRepos = useMemo(
    () => (more ? repos : repos.slice(0, 3)),
    [repos, more]
  )

  const navigate = useNavigate()

  if (repos)
    return (
      <div className="case-studies-container" id="casestudies">
        <h2 className="case-studies-title">Projects</h2>
        <div className="case-studies">
          {memoRepos.map(
            ({
              id,
              clone_url: _,
              homepage,
              name,
              private_repo,
              description,
              created_at,
              languages_url,
              topics,
            }) => (
              <Card key={id} className="case-studies-card">
                <div className="card-img-container">
                  <img className="card-img" src={'https://picsum.photos/500'} />
                </div>
                <CustomChip clas>
                  {private_repo ? 'private' : 'public' + ' Repository'}
                </CustomChip>
                <h4 className="card-title">{name}</h4>
                <div className="card-description-container">
                  <div className="subtitle">{homepage}</div>
                  <div className="medium card-description-inner">
                    {description ?? 'There is no short description at the moment'}
                  </div>
                </div>
                <button
                  className="card-button-details"
                  onClick={() =>
                    navigate('Study/' + name, {
                      state: {
                        title: name,
                        owner: OWNER,
                        repo: name,
                        branch: BRANCH,
                        created_at,
                        languages_url,
                        topics
                      }
                    })
                  }
                >
                  See Details
                </button>
              </Card>
            )
          )}
        </div>
        <SeeMore more={more} setMore={toggleMore} className="study-see-more" />
      </div>
    )
  return <Loader automatic />
}
