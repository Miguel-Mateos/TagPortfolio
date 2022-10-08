import Breadcrumb, {
  BreadcrumbItem
} from '@TagDs/components/breadcrumb/breadcrumb'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useLocation, useNavigate } from 'react-router-dom'
import './study.css'
import { Fragment, useEffect, useState } from 'react'
import { mdToHTML } from '@Utils/markdownToHtml'
import Loader from '@TagDs/components/loader/loader'
import { CustomChip } from '@Components/v2/CaseStudies/CaseStudies'
import { serializeClient } from '@Components/v2/CaseStudies/utils/client'
import { projectTypeParser } from '@Components/v2/CaseStudies/utils/projectType'
import { methodologyParser } from '@Components/v2/CaseStudies/utils/methodologies'
interface LocationState {
  title: string
  repo: string
  branch: string
  owner: string
  created_at: string
  languages_url: string
  topics: string[]
}

export const Study = () => {
  const [readme, setReadme] = useState<{ content: string; element: string }[]>(
    []
  )
  const [languages, setLanguages] = useState<{ [key: string]: string}>({})
  const navigate = useNavigate()
  const history = useLocation()
  const state = history.state as LocationState

  useEffect(() => {
    const getReadme = async () => {
      const readme = await fetch(
        `https://raw.githubusercontent.com/${state.owner}/${state.repo}/${state.branch}/README.md`
      )
      const res = await readme.text()
      setReadme(mdToHTML(res))
    }

    const getLanguages = async () => {
      const languages = await fetch(state.languages_url)
      const res = await languages.json()
      setLanguages(res)
    }
    if (state) Promise.all([getReadme(), getLanguages()])
    else navigate('/')
  }, [])

  return (
    <div role="mainContent">
      <HeadLine title="Hello Welcome to my portfolio!" />
      <div className="study-header">
        <Breadcrumb>
          <BreadcrumbItem
            id="1"
            title="Case Studies"
            onClick={() => navigate('/')}
          />
          <BreadcrumbItem id="2" title={state.title} />
        </Breadcrumb>
        <h1 className="study-header-content">{state.title}</h1>
      </div>
      <div style={{ margin: '39px auto 0px 102px', display: 'flex' }}>
        <div
          style={{
            paddingTop: '44px',
            paddingBottom: '100px',
            flex: '1 1 auto'
          }}
        >
          <h2>
            {readme.length > 0 &&
              readme[0].element === 'h2' &&
              readme[0].content}
          </h2>
          <main className="study-inner-container-layer">
            <div className="study-inner-container-content">
              {readme.length > 0 ? (
                readme.slice(1).map((elem, idx) => {
                  return (
                    <Fragment key={idx}>
                      {(() => {
                        switch (elem.element) {
                          case 'h1':
                            return <h1>{elem.content}</h1>
                          case 'h2':
                            return (
                              <div
                                className="study-img-container"
                                data-title={elem.content}
                              >
                                <img
                                  className="study-img-title"
                                  src="https://picsum.photos/650"
                                  alt=""
                                />
                              </div>
                            )
                          case 'h3':
                            return <h3>{elem.content}</h3>
                          case 'h4':
                            return <h4>{elem.content}</h4>
                          case 'h5':
                            return <h5>{elem.content}</h5>
                          case 'h6':
                            return <h6>{elem.content}</h6>
                          case 'p':
                            return <p>{elem.content}</p>
                          case 'ul':
                            return <ul>{elem.content}</ul>
                          case 'ol':
                            return <ol>{elem.content}</ol>
                          case 'li':
                            return <li>{elem.content}</li>
                          case 'a':
                            return <a href={elem.content}>{elem.content}</a>
                          case 'img':
                            return <img src={elem.content} alt={elem.content} />
                          default:
                            return <p>{elem.content}</p>
                        }
                      })()}
                    </Fragment>
                  )
                })
              ) : (
                <div className="study-inner-loader">
                  <Loader automatic />
                </div>
              )}
            </div>
          </main>
        </div>
        <div className="study-right-side">
          <div className="study-right-side-container">
            <div className="study-right-side-element">
              <small>Client</small>
              <p className='study-topic-element'>{serializeClient(state.topics)}</p>
            </div>

            <div className="study-right-side-element">
              <small>Date</small>
              <p>
                {Intl.DateTimeFormat('default', {
                  month: 'short',
                  year: 'numeric'
                }).format(new Date(state.created_at))}
              </p>
            </div>

            <div className="study-right-side-element">
              <small>Type of Project</small>
              <p className='study-topic-element'>{projectTypeParser(state.topics)}</p>
            </div>

            <div>
              <small>Tech Stack</small>
              {languages ? <div className='study-tech-stack'>
                {Object.keys(languages).map((lang, idx) => (
                <CustomChip key={idx+lang}>{lang} </CustomChip>
              ))}
              </div>
              : <p>No languages provided</p>}
            </div>

            <div>
              <small>Methodology</small>
              <p className='study-topic-element'>{methodologyParser(state.topics)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
