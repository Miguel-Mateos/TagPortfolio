import '../../tag-ds/assets/main.scss'
import { Stack } from '../../Components/Stack/Stack'
import { CaseStudies } from '../../Components/v2/CaseStudies/CaseStudies'
import { Section } from '../../Components/v2/Section'
import { Studies } from '../../Components/v2/Studies/Studies'
import './styles.css'
import { HeadLine } from '../../Components/v2/HeadLine/HeadLine'

export const Home = () => {
  return (
    <div>
      <HeadLine title="Hey welcome to my portfolio!" />
      <div
        style={{
          margin: '39px auto 0px',
          maxWidth: '1024px'
        }}
        className="content"
      >
        <div className="home-hero-container">
          <div className="home-hero-brief" style={{ marginRight: '16px' }}>
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
