import { useAppContext } from '../../Context/ContextApi'

export const Projects = ({}) => {
  const { projects } = useAppContext() as any
  const Project: React.FC<{ data: Object }> = ({ data }) => (
    <div className="work">
      <p className="work-title">project Title</p>
      <p>More info about the project</p>
    </div>
  )
  return (
    <div className="works-container">
      {projects.map((project: any, idx: number) => (
        <Project key={idx} data={project} />
      ))}
    </div>
  )
}
