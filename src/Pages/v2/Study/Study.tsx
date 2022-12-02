import { useRef, useEffect, useState } from 'react'
import Breadcrumb, {
  BreadcrumbItem
} from '@TagDs/components/breadcrumb/breadcrumb'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useLocation, useNavigate } from 'react-router-dom'
import './study.css'
import Loader from '@TagDs/components/loader/loader'
import { CustomChip } from '@Components/v2/CaseStudies/CaseStudies'
import { serializeClient } from '@Components/v2/CaseStudies/utils/client'
import { projectTypeParser } from '@Components/v2/CaseStudies/utils/projectType'
import { methodologyParser } from '@Components/v2/CaseStudies/utils/methodologies'
import { marked } from 'marked'
import { useLayoutWidth } from '@Utils/isMobile'
import { useEvent } from '@Hooks/useEvent'
import { shadowHandler } from './lib/shadowHandler'
import { getReadme } from './lib/getReadme'
import { getLanguages } from './lib/getLanguages'
import { headerRenderer } from './lib/headerRenderer'
import { usePromiseAll } from './lib/useFetch'

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
  const studyRightRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLHeadingElement>(null)
  const navigate = useNavigate()
  const history = useLocation()
  const state = history.state as LocationState
  let isScrolling: any
  const { layoutWidth } = useLayoutWidth({ dynamic: false })

  useEvent({
    listener: () => shadowHandler({ isScrolling, studyRightRef, layoutWidth }),
    type: 'scroll',
    origin: 'documentBody',
    depA: [layoutWidth]
  })

  usePromiseAll({
    promise: [getReadme(state), getLanguages(state)],
    setStates: [setReadme, setLanguages]
  })

  marked.use({ renderer: { heading: headerRenderer } })

  return (
    <div role="main">
      <HeadLine ref={headRef} title="Hello Welcome to my portfolio!" />
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
        <div ref={studyRightRef} className="study-right-side">
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

            <div className="study-right-side-element">
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

            <div className="study-right-side-element">
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
