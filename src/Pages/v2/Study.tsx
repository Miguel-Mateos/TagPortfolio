import Breadcrumb, {
  BreadcrumbItem
} from '@TagDs/components/breadcrumb/breadcrumb'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useLocation, useNavigate } from 'react-router-dom'
import './study.css'
interface LocationState {
  title: string
}

export const Study = () => {
  const navigate = useNavigate()
  const history = useLocation()
  const state = history.state as LocationState
  console.log(history)
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
          <h2>Title</h2>
          <main className="study-inner-container-layer">
            <div className="study-inner-container-content">
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
