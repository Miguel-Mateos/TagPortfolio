import Avatar, { AvatarImg } from '../Avatar/avatar'

interface HeadLineProps {
  title: string
}

export const HeadLine: React.FC<HeadLineProps> = ({ title }) => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--neutral200)',
        backgroundColor: 'var(--neutral0)',
        position: 'sticky',
        top: 0
      }}
    >
      <p
        id="about"
        style={{
          fontSize: '20px',
          lineHeight: '32px',
          fontWeight: 400,
          margin: '24px'
        }}
      >
        {title}
      </p>
      <Avatar title="Iñigo Moreno" small style={{ marginRight: '32px' }}>
        <AvatarImg>
          <img alt="img" src="https://avatars.githubusercontent.com/eneko96" />
        </AvatarImg>
      </Avatar>
    </header>
  )
}
