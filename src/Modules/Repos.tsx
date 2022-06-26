import { FC, useEffect, useRef, useState } from 'react'
import { IRepo } from '../App'
import { Markdown } from '../Markdown'

interface IRepos {
  repos: IRepo[]
}

export const Repos: FC<IRepos> = ({ repos }) => {
  const ref = useRef(null)
  const [moreRepos, setMoreRepos] = useState<boolean>(false)
  const rtf = new Intl.RelativeTimeFormat('default', { style: 'short' })
  const [clipboard, setClipboard] = useState<number | null>(null)
  const [mark, setMark] = useState<string | null>(null)
  const [option, setOption] = useState<number>(0)
  const [isFirstTime, setIsFirstTime] = useState(
    localStorage.getItem('first-time') === null
  )
  let timer: any

  useEffect(() => {
    if (isFirstTime) {
      setTimeout(() => {
        localStorage.setItem('first-time', 'false')
        setIsFirstTime(false)
      }, 5000)
    }
  }, [])

  const copyToClipboard = (text: string, idx: number) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
      setClipboard(idx)
      clearTimeout(timer)
      timer = setTimeout(() => setClipboard(null), 2000)
    }
  }

  const toggleOption = () => (option === 0 ? setOption(1) : setOption(0))

  return (
    <>
      <h2 ref={ref} className={`${isFirstTime ? 'first-time' : ''}`}>
        Repos
      </h2>
      <button onClick={toggleOption} className="button minimal">
        Option {option}
      </button>
      {option === 0 ? (
        <>
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
                  <h3>{repo.name}</h3>
                  <div
                    style={{
                      textAlign: 'left',
                      marginTop: '2rem',
                      padding: '0 1rem'
                    }}
                  >
                    <p>
                      Description:{' '}
                      {repo.description || 'No Description Provided'}
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
                        >
                          Go to Repo
                        </a>
                      </button>
                      <button
                        className={`button ${
                          clipboard === index ? 'copied' : ''
                        }`}
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
      ) : (
        <div className="repos-container">
          <div className="repos-container-repos">
            {repos &&
              repos.map((repo, idx) => (
                <div
                  key={idx + 'repo'}
                  style={{ userSelect: 'none' }}
                  onClick={() => repo.name && setMark(repo.name)}
                  className="card repo interactive"
                >
                  <h3>{repo.name}</h3>
                </div>
              ))}
          </div>
          {mark ? (
            <div className="card repos-container-mark">
              <Markdown repo={mark} />
            </div>
          ) : (
            <div className="card repos-container-mark-placeholder">
              Select a Repo to see the details
            </div>
          )}
        </div>
      )}
    </>
  )
}
