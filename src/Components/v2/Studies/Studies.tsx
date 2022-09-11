import { Card } from '../Card/Card'
import { SeeMore } from '../SeeMore/SeeMore'

const CardModulated = () => {
  return (
    <Card>
      <small
        style={{
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '32px',
          marginRight: '24px',
          paddingTop: '16px',
          textAlign: 'right',
          color: 'var(--neutral700)'
        }}
      >
        25 enero 2022
      </small>
      <h4>Name Study</h4>
      <div className="base" style={{ marginTop: '8px' }}>
        Position on Study
      </div>
      <p style={{ color: 'var(--neutral700)', marginTop: '8px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo,
      </p>
    </Card>
  )
}

const Space = ({ height }: { height: string }) => <div style={{ height }} />

export const Studies = () => {
  return (
    <div style={{ marginTop: '72px' }}>
      <h2 style={{ marginBottom: '40px' }}>Studies</h2>
      <CardModulated />
      <Space height="16px" />
      <CardModulated />
      <Space height="16px" />
      <CardModulated />
      <SeeMore styles={{ marginTop: '72px' }} />
    </div>
  )
}
