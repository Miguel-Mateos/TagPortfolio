import { useState } from 'react'
import { useAppContext } from '../../Context/ContextApi'
import { useLanguage } from '../../hooks/useLanguage'
import { Work } from './Work'
import './styles.css'

export const Works = () => {
  const [more, setMore] = useState<number | null>(0)
  const { works } = useAppContext()
  const { t } = useLanguage()

  return (
    <>
      <h1 className="title-box">{t('experience')}</h1>
      <div className="works-container">
        {works.length > 0 &&
          works
            .sort(
              (elA: any, elB: any) =>
                Number(new Date(elB.Start)) - Number(new Date(elA.Start))
            )
            .map((work: any, idx: number) => (
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
