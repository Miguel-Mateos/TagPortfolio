import { Card } from '../Card/Card'
import { SeeMore } from '../SeeMore/SeeMore'
import './studies.css'

const CardModulated = () => {
  return (
    <Card>
      <small className="case-study-date">25 enero 2022</small>
      <h4>Name Study</h4>
      <div className="base case-study-position">Position on Study</div>
      <p className="case-study-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo,
      </p>
    </Card>
  )
}

const Space = ({ height }: { height: string }) => <div style={{ height }} />

export const Studies = () => {
  return (
    <div className="study-container" id="studies">
      <h2 className="study-title">Certifications & References</h2>
      <CardModulated />
      <Space height="16px" />
      <CardModulated />
      <Space height="16px" />
      <CardModulated />
      <SeeMore className="study-see-more" />
    </div>
  )
}
