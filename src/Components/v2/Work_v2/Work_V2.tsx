import { CustomChip } from '../CaseStudies/CaseStudies'
import './styles.css'

interface Work_V2Props {
  client: string
  date: string
  projectType: string
  description: string[]
  id: string
  tech_stack: string[]
}

export const WorkV2: React.FC<Work_V2Props> = ({
  client,
  date,
  projectType,
  description,
  tech_stack
}) => {
  return (
    <div className="workv2-container">
      <div className="section-info" style={{ minWidth: '228px' }}>
        <div style={{ margin: '16px' }}>
          <small style={{ textTransform: 'uppercase' }}>Client</small>
          <div className="base">{client}</div>
        </div>
        <div style={{ margin: '16px' }}>
          <small style={{ textTransform: 'uppercase' }}>Date</small>
          <div className="base">{date}</div>
        </div>
        <div style={{ margin: '16px' }}>
          <small style={{ textTransform: 'uppercase' }}>Type of Project</small>
          <div className="base">{projectType}</div>
        </div>
      </div>
      <div className="section-description">
        <div className="section-tech_stack">
          {tech_stack &&
            tech_stack.length > 0 &&
            tech_stack.map((tech, index) => (
              <CustomChip key={index + 'tech-stack'}>{tech}</CustomChip>
            ))}
        </div>
        {description.map((desc, index) => (
          <p key={index + 'work-description'}>{desc}</p>
        ))}
      </div>
    </div>
  )
}

// consist of the following components
// client
// date
// type of project
// description
