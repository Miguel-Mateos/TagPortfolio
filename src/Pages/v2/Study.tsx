import BreadcrumbItem from '../../Components/v2/breadcrumb/breadcrumbItem'
import Breadcrumb from '../../Components/v2/breadcrumb/breadcrumb'
import { HeadLine } from '../../Components/v2/HeadLine/HeadLine'
import './study.css'

export const Study = () => {
  return (
    <div>
      <HeadLine title="Hello Welcome to my portfolio!" />
      <div className="study-header">
        <Breadcrumb>
          <BreadcrumbItem id="1" title="Case Studies" href="href" />
          <BreadcrumbItem
            id="2"
            title="TAG Design System for The Adecco Group"
            href="href"
          />
        </Breadcrumb>
        <h1 className="study-header-content">
          TAG Design System for The Adecco Group
        </h1>
      </div>
      <div style={{ margin: '39px auto 0px 102px', display: 'flex' }}>
        <div style={{ paddingTop: '44px', paddingBottom: '100px' }}>
          <h2>Title</h2>
          <main style={{ display: 'flex' }}>
            <div style={{ marginTop: '40px' }}>
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
              <div
                className="img-container"
                data-title="This is a title"
                style={{ margin: '72px 0' }}
              >
                <img
                  className="img-title"
                  src="https://picsum.photos/650"
                  alt=""
                  width="100%"
                  height="208px"
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
              <div
                className="img-container"
                data-title="This is a title"
                style={{ margin: '72px 0' }}
              >
                <img
                  className="img-title"
                  src="https://picsum.photos/650"
                  alt=""
                  width="100%"
                  height="208px"
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
        <div
          style={{
            flex: '1 0 528px',
            padding: '48px 92px',
            boxShadow: '4px 8px 16px rgba(28, 48, 75, 0.08)',
            marginLeft: '32px'
          }}
        >
          <div style={{ position: 'sticky', top: '128px' }}>
            <div style={{ marginBottom: '24px' }}>
              <small style={{ textTransform: 'uppercase' }}>Client</small>
              <p style={{ marginTop: '8px' }}>Ye</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <small style={{ textTransform: 'uppercase' }}>Date</small>
              <p style={{ marginTop: '8px' }}>Ye</p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <small style={{ textTransform: 'uppercase' }}>
                Type of Project
              </small>
              <p style={{ marginTop: '8px' }}>Ye</p>
            </div>

            <div>
              <small style={{ textTransform: 'uppercase' }}>Tech Stack</small>
              <p style={{ marginTop: '8px' }}>Ye</p>
            </div>

            <div>
              <small style={{ textTransform: 'uppercase' }}>Methodology</small>
              <p style={{ marginTop: '8px' }}>Ye</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
