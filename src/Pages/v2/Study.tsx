import Breadcrumb, {
  BreadcrumbItem
} from '@TagDs/components/breadcrumb/breadcrumb'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useLocation, useNavigate } from 'react-router-dom'
import './study.css'
import { Fragment, useEffect, useState } from 'react'
import { mdToHTML } from '@Utils/markdownToHtml'
interface LocationState {
  title: string
  repo: string
  branch: string
  owner: string
}

export const Study = () => {
  const [readme, setReadme] = useState<{ content: string; element: string }[]>(
    []
  )
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
    getReadme()
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
        <div style={{ paddingTop: '44px', paddingBottom: '100px' }}>
          <h2>
            {readme.length && readme[0].element === 'h2' && readme[0].content}
          </h2>
          <main className="study-inner-container-layer">
            <div className="study-inner-container-content">
              {readme.length > 0 &&
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
                })}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <div className="study-img-container" data-title="This is a title">
                <img
                  className="study-img-title"
                  src="https://picsum.photos/650"
                  alt=""
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <div className="study-img-container" data-title="This is a title">
                <img
                  className="study-img-title"
                  src="https://picsum.photos/650"
                  alt=""
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                et venenatis metus. Vestibulum faucibus metus a tortor
                tincidunt, id rhoncus dui maximus. Duis id bibendum mauris, in
                hendrerit est. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nullam et venenatis metus. Vestibulum faucibus
                metus a tortor tincidunt, id
              </p>
            </div>
          </main>
        </div>
        <div className="study-right-side">
          <div className="study-right-side-container">
            <div className="study-right-side-element">
              <small>Client</small>
              <p>Ye</p>
            </div>

            <div className="study-right-side-element">
              <small>Date</small>
              <p>Ye</p>
            </div>

            <div className="study-right-side-element">
              <small>Type of Project</small>
              <p>Ye</p>
            </div>

            <div>
              <small>Tech Stack</small>
              <p>Ye</p>
            </div>

            <div>
              <small>Methodology</small>
              <p>Ye</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
