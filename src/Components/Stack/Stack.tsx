import { images } from '../../contants'

export const Stack = () => {
  return (
    <div style={{ marginTop: '72px' }} id="teckstack">
      <h2>Tech Stack</h2>
      <div
        style={{
          display: 'flex',
          gap: '39px',
          flexWrap: 'wrap',
          marginTop: '40px'
        }}
      >
        {Array(13)
          .fill(1)
          .map((_, idx) => {
            return (
              <div
                style={{
                  height: '75px',
                  width: '75px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
                key={Math.random()}
              >
                <img src={images[idx]} height="50" width="50" />
              </div>
            )
          })}
      </div>
      <div className="separator" style={{ margin: '72px 0' }} />
    </div>
  )
}
