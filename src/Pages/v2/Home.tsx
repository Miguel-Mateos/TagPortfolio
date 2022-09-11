import 'tag-ds/assets/main.scss'
import { Stack } from '../../Components/Stack/Stack'
import { CaseStudies } from '../../Components/v2/CaseStudies/CaseStudies'
import { Section } from '../../Components/v2/Section'
import { Studies } from '../../Components/v2/Studies/Studies'
import './styles.css'

export const Home = () => {
  return (
    <div>
      <p
        id="about"
        style={{
          fontSize: '20px',
          lineHeight: '32px',
          fontWeight: 400,
          margin: '24px'
        }}
      >
        Hey welcome to my portfolio!
      </p>
      <div className="separator" />
      <div style={{ margin: '39px 120px 0px 102px' }} className="content">
        <div className="home-hero-container">
          <div className="home-hero-brief">
            <h1 style={{ marginBottom: '16px' }}>
              I am Iñigo Moreno, IT Consultant
            </h1>
            <div className="small-title">
              Experience In the Following industries
            </div>
            <div className="base">
              Web Development and other things I will explain
            </div>
            <br />
            <div className="small-title">Core skills</div>
            <div className="base">
              Web Development and other things I will explain Web Development
              and other things I will explain Web Development and other things I
              will explain
            </div>
            <br />
            <div className="small-title">Cliffton Strengths</div>
            <div className="base">
              Web Development and other things I will explain
            </div>
          </div>
          <div className="home-hero-image">
            <picture>
              <source type="image/webp" srcSet="/first_image.webp" />
              <source type="image/jpeg" srcSet="/first_image.jpg" />
              <img
                style={{ width: '440px', height: '466px' }}
                src="/first_image.jpg"
                loading="eager"
                alt="head image"
                className="header-image"
              />
            </picture>
          </div>
        </div>
        <div className="separator" />
        <Section />
        <Studies />
        <Stack />
        <CaseStudies />
      </div>
    </div>
  )
}
