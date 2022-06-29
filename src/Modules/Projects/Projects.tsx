import { IProject, useAppContext } from '../../Context/ContextApi'

export const Projects = ({}) => {
  const { projects } = useAppContext() as any
  const Project: React.FC<{ data: IProject }> = ({ data }) => (
    <div className="work">
      <h1 className="work-title">{data.name}</h1>
      <h4>Associate with: {data.associate}</h4>
      <p>{data.description}</p>
    </div>
  )
  return (
    <>
      <h1
        style={{
          textAlign: 'left',
          fontSize: '50px',
          color: 'var(--secondary)'
        }}
      >
        Work Experience
      </h1>
      <div className="works-container" style={{ marginTop: '2rem' }}>
        {projects.map((project: IProject, idx: number) => (
          <Project key={idx} data={project} />
        ))}
      </div>
    </>
  )
}
