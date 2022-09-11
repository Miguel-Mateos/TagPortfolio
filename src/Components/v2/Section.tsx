import { SeeMore } from './SeeMore/SeeMore'

export const Section = () => {
  return (
    <div style={{ marginTop: '72px' }}>
      <h2>Work</h2>
      <div style={{ display: 'flex', gap: '72px' }}>
        <div className="section-info" style={{ minWidth: '228px' }}>
          <p>
            <small style={{ textTransform: 'uppercase' }}>Client</small>
            <div className="base">The Adecco Group</div>
          </p>
          <p>
            <small style={{ textTransform: 'uppercase' }}>Date</small>
            <div className="base">15 May 2022</div>
          </p>
          <p>
            <small style={{ textTransform: 'uppercase' }}>
              Type of Project
            </small>
            <div className="base">IT Consultant</div>
          </p>
        </div>
        <div className="section-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nemo, non a molestiae perferendis temporibus laborum aperiam nulla
            sunt, architecto facilis hic eveniet soluta fugit obcaecati
            asperiores cumque quo quod.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nemo, non a molestiae perferendis temporibus laborum aperiam nulla
            sunt, architecto facilis hic eveniet soluta fugit obcaecati
            asperiores cumque quo quod.
          </p>
        </div>
      </div>
      <SeeMore styles={{ marginTop: '72px' }} />
    </div>
  )
}
