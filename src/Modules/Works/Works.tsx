import { useState } from 'react'
import { useAppContext } from '../../Context/ContextApi'
import { useLanguage } from '../../hooks/useLanguage'

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

interface IWork {
  work: {
    Name: string
    Position: string
    Start: Date
    Finish: Date
    description: string
  }
  more: number | null
  setMore: (more: number | null) => void
  idx: number
}

const Work: React.FC<IWork> = ({ work, setMore, more, idx }) => {
  const refineDescription = (str: string) => {
    const json = JSON.parse(str) as Object

    return Object.values(json).map((val, idk) => (
      <p key={`${idx} ${idk}-val`}>{val}</p>
    ))
  }

  if (window.innerWidth > 600) {
    return (
      <div className="work">
        <p className="work-title title" style={{ width: '100%' }}>
          {work.Name} &nbsp;
          <span className="work-position title">as {work.Position}</span>
        </p>
        <p className="work-subtitle title">
          From {''}
          {Intl.DateTimeFormat('default', {
            month: 'long'
          }).format(new Date(work.Start))}
          &nbsp;To&nbsp;
          {Intl.DateTimeFormat('default', {
            month: 'long'
          }).format(new Date(work.Finish))}
        </p>
        <div className="work-rest-info">
          {refineDescription(work.description)}
        </div>
      </div>
    )
  }

  return (
    <div className="work">
      <p
        className="work-title title"
        style={{ width: '100%' }}
        onClick={() => (more !== idx ? setMore(idx) : setMore(null))}
      >
        {work.Name} &nbsp;
        <span className="work-position title">as {work.Position}</span>
        <span>
          <MoreIcon more={more === idx ?? false} />
        </span>
      </p>
      {more === idx ? (
        <div className="work-rest-container">
          <p className="work-subtitle title">
            From {''}
            {Intl.DateTimeFormat('default', {
              month: 'long'
            }).format(new Date(work.Start))}
            &nbsp;To&nbsp;
            {Intl.DateTimeFormat('default', {
              month: 'long'
            }).format(new Date(work.Finish))}
          </p>
          {refineDescription(work.description)}
        </div>
      ) : null}
    </div>
  )
}

export const Works = () => {
  const [more, setMore] = useState<number | null>(0)
  const { works } = useAppContext() as any
  const { t } = useLanguage()

  return (
    <>
      <h1 className="title-box">{t('experience')}</h1>
      <div className="works-container">
        {works.length > 0 &&
          works.map((work: any, idx: number) => (
            <Work
              idx={idx}
              more={more === idx ? more : null}
              setMore={setMore}
              work={work}
              key={'work' + idx}
            />
          ))}
      </div>
    </>
  )
}
