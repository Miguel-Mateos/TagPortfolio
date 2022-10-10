import { useAppContextV2 } from '@Context/ContextV2'

export const Stack = () => {
  const { baseData } = useAppContextV2()

  const stackList = () => {
    if (baseData) {
      const { tech_stack } = baseData
      const { id, greeting_id, created_at, ...rest } = tech_stack[0]
      return rest
    }
    return []
  }

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
        {Object.entries(stackList()).map((entry, idx) => {
          if (entry[1])
            return (
              <div
                title={entry[0]}
                style={{
                  height: '75px',
                  width: '75px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
                key={idx + 'stack-img'}
              >
                <img src={`/${entry[0]}.png`} height="50" width="50" />
              </div>
            )
          return null
        })}
      </div>
      <div className="separator" style={{ margin: '72px 0' }} />
    </div>
  )
}
