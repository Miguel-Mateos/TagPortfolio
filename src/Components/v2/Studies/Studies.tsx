import { useAppContextV2 } from '@Context/ContextV2'
import { useMemo, useState } from 'react'
import { Card } from '../Card/Card'
import { SeeMore } from '../SeeMore/SeeMore'
import './studies.css'
const MOCK_DESC = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo,'
]

interface ICardModulatedProps {
  date: Date
  title: string
  subtitle: string
  description: string[]
}

const CardModulated: React.FC<ICardModulatedProps> = ({
  date,
  description,
  subtitle,
  title
}) => {
  const [more, setMore] = useState(false)
  const variableDescription = useMemo(
    () =>
      description?.length > 3 && more ? description : description.slice(0, 3),
    [description, more]
  )

  const toggleMore = () => setMore(!more)

  return (
    <Card>
      <small className="case-study-date">
        {date &&
          Intl.DateTimeFormat('default', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }).format(date)}
      </small>
      <h4>{title}</h4>
      <div className="base case-study-position">{subtitle}</div>
      <div className="case-study-description-container">
        {variableDescription.map((desc, idx) => (
          <p
            className="case-study-description"
            key={idx + 'case-study-description'}
          >
            {desc}
          </p>
        ))}
      </div>
      {description?.length > 3 && (
        <a style={{ whiteSpace: 'nowrap' }} onClick={toggleMore}>
          {more ? 'See less' : 'See more'}
        </a>
      )}
    </Card>
  )
}

const Space = ({ height }: { height: string }) => <div style={{ height }} />

export const Studies = () => {
  const { baseData } = useAppContextV2()

  const ShowCards: React.FC = () => {
    if (baseData) {
      const { cert_ref } = baseData
      return (
        <>
          {cert_ref &&
            cert_ref.length &&
            cert_ref.map((cert, index) => (
              <>
                <CardModulated
                  key={index + 'cert-ref'}
                  date={new Date(cert.date)}
                  description={cert.description}
                  subtitle={cert.subtitle}
                  title={cert.name}
                />
                {index < cert_ref.length - 1 && <Space height="16px" />}
              </>
            ))}
        </>
      )
    }
    return null
  }
  return (
    <div className="study-container" id="studies">
      <h2 className="study-title">Certifications & References</h2>
      <ShowCards />
      {/* <Space height="16px" /> */}
      <SeeMore className="study-see-more" />
    </div>
  )
}
