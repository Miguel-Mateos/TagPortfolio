import Avatar, { AvatarImg } from '@TagDs/components/avatar/avatar'
import './styles.css'

interface HeadLineProps {
  title: string
}

export const HeadLine: React.FC<HeadLineProps> = ({ title }) => {
  return (
    <header className="headline-header">
      {title && (
        <p id="about" className="headline-about">
          {title}
        </p>
      )}
      <Avatar title="Iñigo Moreno" small className="headline-avatar">
        <AvatarImg>
          <img alt="img" src="https://avatars.githubusercontent.com/eneko96" />
        </AvatarImg>
      </Avatar>
    </header>
  )
}
