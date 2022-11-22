import { useAppContextV2 } from '@Context/ContextV2'
import './index.css'

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
      <div className="tech-stack-container">
        {Object.entries(stackList()).map((entry, idx) => {
          if (entry[1])
            return (
              <div>
                <div
                  title={entry[0]}
                  className="tech-stack-element"
                  key={idx + 'stack-img'}
                >
                  <img
                    src={`/${entry[0]}.png`}
                    height="50"
                    width="50"
                    alt={entry[0]}
                  />
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    textTransform: 'capitalize'
                  }}
                  className="small"
                >
                  {entry[0]}
                </div>
              </div>
            )
          return null
        })}
      </div>
      <div className="separator" style={{ margin: '72px 0' }} />
    </div>
  )
}
