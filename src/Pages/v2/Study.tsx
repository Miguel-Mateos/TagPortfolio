import './study.css'

export const Study = () => {
  return (
    <div style={{ margin: '39px auto 0px 102px', display: 'flex' }}>
      <div style={{ paddingTop: '44px' }}>
        <h2>Title</h2>
        <main style={{ display: 'flex' }}>
          <div style={{ marginTop: '40px' }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              venenatis metus. Vestibulum faucibus metus a tortor tincidunt, id
              rhoncus dui maximus. Duis id bibendum mauris, in hendrerit est.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              venenatis metus. Vestibulum faucibus metus a tortor tincidunt, id
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              venenatis metus. Vestibulum faucibus metus a tortor tincidunt, id
              rhoncus dui maximus. Duis id bibendum mauris, in hendrerit est.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              venenatis metus. Vestibulum faucibus metus a tortor tincidunt, id
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              venenatis metus. Vestibulum faucibus metus a tortor tincidunt, id
              rhoncus dui maximus. Duis id bibendum mauris, in hendrerit est.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et
              venenatis metus. Vestibulum faucibus metus a tortor tincidunt, id
            </p>
            <div className="img-container" data-title="This is a title">
              <img
                className="img-title"
                src="https://picsum.photos/650"
                alt=""
                width="100%"
                height="208px"
              />
            </div>
          </div>
        </main>
      </div>
      <div style={{ flex: '1 0 528px', padding: '48px 92px' }}>
        <div style={{ marginBottom: '24px' }}>
          <small style={{ textTransform: 'uppercase' }}>Client</small>
          <p style={{ marginTop: '8px' }}>Ye</p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <small style={{ textTransform: 'uppercase' }}>Date</small>
          <p style={{ marginTop: '8px' }}>Ye</p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <small style={{ textTransform: 'uppercase' }}>Type of Project</small>
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
  )
}
