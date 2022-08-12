import { useAppContext } from '../../Context/ContextApi'
import { useLanguage } from '../../hooks/useLanguage'
import { MoreIcon } from '../../Icons/More'

interface IWork {
  work: {
    Name: string
    Position: string
    Start: Date
    Finish: Date
    description: string
    id: number
  }
  more: number | null
  setMore: (more: number | null) => void
  idx: number
}

export const Work: React.FC<IWork> = ({ work, setMore, more, idx }) => {
  const { descriptions } = useAppContext()
  const { t } = useLanguage()
  const refineDescription = (str: string) => {
    if (str) {
      const json = JSON.parse(str) as Object

      return Object.values(json).map((val, idk) => (
        <p key={`${idx} ${idk}-val`}>{val}</p>
      ))
    }
  }

  if (window.innerWidth > 600) {
    return (
      <div className="work">
        <p className="work-title title" style={{ width: '100%' }}>
          {work.Name} &nbsp;
          <span className="work-position title">
            {t('as')} {work.Position}
          </span>
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
          {refineDescription(
            descriptions.find((d) => d.work_id === work.id)?.content || ''
          )}
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
        <span className="work-position title">
          {t('as')} {work.Position}
        </span>
        <span className="work-more-container">
          <MoreIcon more={more === idx ?? false} />
        </span>
      </p>
      <div className={`work-rest-container${more === idx ? '_active' : ''}`}>
        <p className="work-subtitle title">
          From {''}
          {Intl.DateTimeFormat('default', {
            month: 'long'
          }).format(new Date(work.Start))}
          &nbsp;To&nbsp;
          {work.Finish !== null
            ? Intl.DateTimeFormat('default', {
                month: 'long'
              }).format(new Date(work.Finish))
            : 'Currently'}
        </p>
        {refineDescription(
          descriptions.find((_d) => _d.work_id === work.id)?.content || ''
        )}
      </div>
    </div>
  )
}
