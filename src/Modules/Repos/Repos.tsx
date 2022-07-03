import { FC, useEffect, useRef, useState } from 'react'
import { IRepo } from '../../App'
import { Modal } from '../../Components/Modal/Modal'
import { Markdown } from '../../Markdown'

interface IRepos {
  repos: IRepo[]
}

export const Repos: FC<IRepos> = ({ repos }) => {
  const ref = useRef(null)
  const [moreRepos, setMoreRepos] = useState<boolean>(false)
  const rtf = new Intl.RelativeTimeFormat('default', { style: 'short' })
  const [clipboard, setClipboard] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState<string>('')
  let timer: any

  const copyToClipboard = (text: string, idx: number) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
      setClipboard(idx)
      clearTimeout(timer)
      timer = setTimeout(() => setClipboard(null), 2000)
    }
  }

  const handleCloseModal = () => setOpenModal('')

  return (
    <>
      {openModal && (
        <Modal onClose={handleCloseModal}>
          <Markdown repo={openModal} />
        </Modal>
      )}
      <h1
        style={{
          fontSize: '50px',
          textAlign: 'left',
          marginBottom: 0,
          color: 'var(--primary)'
        }}
      >
        Repositories
      </h1>
      <div
        style={{
          flexWrap: 'wrap',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {repos &&
          (moreRepos ? repos : repos.slice(0, 4)).map((repo, index) => (
            <div
              key={index + 'repo'}
              className="card fade-in"
              style={{ flex: '1 1 20rem', justifyContent: 'center' }}
            >
              <h3 style={{ maxWidth: '80%' }}>{repo.name}</h3>
              <button
                onClick={() => setOpenModal(repo.name)}
                className="button_small minimal readme"
              >
                Readme
              </button>
              <div
                style={{
                  textAlign: 'left',
                  marginTop: '2rem',
                  padding: '0 1rem'
                }}
              >
                <p>
                  Description: {repo.description || 'No Description Provided'}
                </p>
                <p>
                  Created:{' '}
                  {Intl.DateTimeFormat('default', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit'
                  }).format(new Date(repo.created_at))}
                </p>
                <p>Last Updated: {rtf.format(-1, 'day')}</p>
                <a
                  href={'//' + repo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open homepage"
                >
                  {repo.homepage?.replace('https://', '')}
                </a>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right'
                  }}
                >
                  <button className="button">
                    <a
                      href={repo.clone_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open clone url"
                    >
                      Go to Repo
                    </a>
                  </button>
                  <button
                    className={`button ${clipboard === index ? 'copied' : ''}`}
                    onClick={() =>
                      copyToClipboard(`git clone ${repo.clone_url}`, index)
                    }
                  >
                    Clone
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button
        className="button minimal"
        onClick={() => setMoreRepos(!moreRepos)}
      >
        {moreRepos ? 'See Less...' : 'See More...'}
      </button>
    </>
  )
}
