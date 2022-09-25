import { useAppContextV2 } from '@Context/ContextV2'
import { SeeMore } from './SeeMore/SeeMore'
import { WorkV2 } from './Work_v2/Work_V2'
import './section.css'

export const Section = () => {
  const { baseData } = useAppContextV2()

  if (baseData) {
    const { work_v2 } = baseData
    return (
      <div style={{ marginTop: '72px' }} id="work">
        <h2 style={{ marginBottom: '40px' }}>Work Experience</h2>
        <div className="section-v2-work-container">
          {work_v2.map(({ project_type: projectType, ...rest }, index) => (
            <WorkV2
              key={index + 'work-section'}
              projectType={projectType}
              {...rest}
            />
          ))}
        </div>
        <SeeMore styles={{ marginTop: '72px' }} />
      </div>
    )
  }
  return null
}
