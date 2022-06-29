import { useAppContext } from '../../Context/ContextApi'

export const Achievements = ({}) => {
  const { achievements } = useAppContext() as any
  const Achievement: React.FC<{ data: Object }> = ({ data }) => (
    <div className="work">
      <p className="work-title">Achievement Title</p>
      <p>More info about the Achievement</p>
    </div>
  )
  return (
    <div className="works-container">
      {achievements.map((achievement: any, idx: number) => (
        <Achievement key={idx} data={achievement} />
      ))}
    </div>
  )
}
