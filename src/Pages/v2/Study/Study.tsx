import Breadcrumb, {
  BreadcrumbItem
} from '@TagDs/components/breadcrumb/breadcrumb'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useLocation, useNavigate } from 'react-router-dom'
import './study.css'
import { useEffect, useState } from 'react'
import Loader from '@TagDs/components/loader/loader'
import { CustomChip } from '@Components/v2/CaseStudies/CaseStudies'
import { serializeClient } from '@Components/v2/CaseStudies/utils/client'
import { projectTypeParser } from '@Components/v2/CaseStudies/utils/projectType'
import { methodologyParser } from '@Components/v2/CaseStudies/utils/methodologies'
import { marked } from 'marked'
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
  const [readme, setReadme] = useState<string>('')
  const [languages, setLanguages] = useState<{ [key: string]: string }>({})
  const navigate = useNavigate()
  const history = useLocation()
  const state = history.state as LocationState

  useEffect(() => {
    const getReadme = async () => {
      const readme = await fetch(
        `https://raw.githubusercontent.com/${state.owner}/${state.repo}/${state.branch}/README.md`
      )
      const res = await readme.text()
      setReadme(res)
    }

    const getLanguages = async () => {
      const languages = await fetch(state.languages_url)
      const res = await languages.json()
      setLanguages(res)
    }
    if (state) Promise.all([getReadme(), getLanguages()])
    else navigate('/')
  }, [])

  const headerRenderer = (text: string, level: 2 | 1 | 3 | 4 | 5 | 6) => {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
    if (level === 2) {
      return `<div class="study-img-container" data-title=${text}>
          <img
            class="study-img-title"
            src="https://picsum.photos/650"
            alt=${text}
          />
        </div>`
    } else return `<h${level} id="${escapedText}">${text}</h${level}>`
  }

  marked.use({ renderer: { heading: headerRenderer } })

  return (
    <div role="main">
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
      <div className="study-page-container">
        <div className="study-inner">
          <main className="study-inner-container-layer">
            <div className="study-inner-container-content">
              {readme ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(readme, {
                      breaks: true,
                      gfm: true,
                      headerIds: true
                    })
                  }}
                ></div>
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
              <p className="study-topic-element">
                {serializeClient(state.topics)}
              </p>
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
              <p className="study-topic-element">
                {projectTypeParser(state.topics)}
              </p>
            </div>

            <div>
              <small>Tech Stack</small>
              {languages ? (
                <div className="study-tech-stack">
                  {Object.keys(languages).map((lang, idx) => (
                    <CustomChip key={idx + lang}>{lang} </CustomChip>
                  ))}
                </div>
              ) : (
                <p>No languages provided</p>
              )}
            </div>

            <div>
              <small>Methodology</small>
              <p className="study-topic-element">
                {methodologyParser(state.topics)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
