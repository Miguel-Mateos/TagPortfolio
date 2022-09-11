import { Card } from '../Card/Card'

const CustomChip: React.FC<any> = ({ children }) => (
  <small
    style={{
      borderRadius: '16px',
      backgroundColor: 'var(--secondary100)',
      textTransform: 'uppercase',
      padding: '4px 16px'
    }}
  >
    {children}
  </small>
)

export const CaseStudies = () => {
  return (
    <div
      className="case-studies-container"
      style={{ marginBottom: '72px' }}
      id="casestudies"
    >
      <h2 style={{ marginBottom: '40px' }}>Case Studies</h2>
      <div className="case-studies" style={{ display: 'flex', gap: '32px' }}>
        {Array(3)
          .fill(1)
          .map(() => (
            <Card key={Math.random()}>
              <div
                style={{
                  height: '200px',
                  backgroundColor: 'grey',
                  margin: '0 -24px',
                  marginBottom: '20px',
                  borderRadius: '8px 8px 0 0'
                }}
              />
              <CustomChip>Non disclosure agreement</CustomChip>
              <h4 style={{ marginTop: '24px', marginBottom: '8px' }}>Tag Ds</h4>
              <div
                className="case-study-description"
                style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                <div className="subtitle">The Adecco Group Design System</div>
                <div className="medium" style={{ color: 'var(--neutral700)' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nec commodo mauris. Aliquam erat volutpat. Aliquam
                  suscipit in augue et iaculis. Sed non amet.
                </div>
              </div>
              <button style={{ marginTop: '32px', marginLeft: 'auto' }}>
                See Details
              </button>
            </Card>
          ))}
      </div>
    </div>
  )
}
