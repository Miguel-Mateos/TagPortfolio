import { useState } from 'react'
import { IProject, useAppContext } from '../../Context/ContextApi'
import { useLanguage } from '../../hooks/useLanguage'

interface IProjectInner {
  data: IProject
  more: number | null
  setMore: (more: number | null) => void
  idx: number
}

const MoreIcon = ({ more }: { more: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={more ? 'icon-more' : 'icon-more-horizontal'}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

export const Projects = ({}) => {
  const { projects, projectDescriptions } = useAppContext()
  const [more, setMore] = useState<number | null>(0)
  const { t } = useLanguage()

  const renderProject: React.FC<IProjectInner> = ({
    data,
    more,
    setMore,
    idx
  }) =>
    window.innerWidth > 600 ? (
      <div className="work">
        <h1 className="work-title">{data.name}</h1>
        <h4>
          {t('associate')}: {data.associate}
        </h4>
        {projectDescriptions.length > 0 && (
          <p>
            {projectDescriptions.find((pd) => pd.project_id === data.id)
              ?.content || ''}
          </p>
        )}
      </div>
    ) : (
      <div className="work">
        <h1
          className="work-title"
          onClick={() => (more !== idx ? setMore(idx) : setMore(null))}
        >
          {data.name}
          <span>
            <MoreIcon more={more === idx ?? false} />
          </span>
        </h1>
        <div className={`work-rest-container${more === idx ? '_active' : ''}`}>
          {data.associate && (
            <h4>
              {t('associate')}: {data.associate}
            </h4>
          )}
          {data.description && <p>{data.description}</p>}
        </div>
      </div>
    )

  return (
    <>
      <h1 className="title-box">{t('projects')}</h1>
      <div className="works-container" style={{ marginTop: '2rem' }}>
        {projects.map((project, idx: number) =>
          renderProject({
            data: project,
            idx,
            more,
            setMore
          })
        )}
      </div>
    </>
  )
}
