export const Stack = () => {
  return (
    <div style={{ marginTop: '72px' }}>
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
          .map(() => {
            return (
              <div
                style={{ height: '75px', width: '94px', background: 'red' }}
              />
            )
          })}
      </div>
      <div className="separator" style={{ margin: '72px 0' }} />
    </div>
  )
}
