import { Stack } from '../../Components/Stack/Stack'
import { CaseStudies } from '../../Components/v2/CaseStudies/CaseStudies'
import { Section } from '../../Components/v2/Section'
import { Studies } from '../../Components/v2/Studies/Studies'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useAppContextV2 } from '@Context/ContextV2'
import { useStore } from './../../store'
import './styles.css'

export const Home = () => {
  const { baseData } = useAppContextV2()
  const state = useStore()
  if (baseData)
    return (
      <div role="mainContent">
        <HeadLine title="Hey welcome to my portfolio!" />
        <div className="content home-container">
          <div className="home-hero-container">
            <div className="home-hero-brief">
              <h1 className="home-hero-title">
                I am {baseData.name}, {baseData.position}
              </h1>
              <div className="small-title">
                Experience In the Following industries
              </div>
              <div className="base">{baseData.experience}</div>
              <br />
              <div className="small-title">Core skills</div>
              <div className="base">{baseData.skills}</div>
              <br />
              <div className="small-title">Cliffton Strengths</div>
              <div className="base">{baseData.strengths}</div>
            </div>
            <div className="home-hero-image">
              <picture>
                <source type="image/webp" srcSet="/first_image.webp" />
                <source type="image/jpeg" srcSet="/first_image.jpg" />
                <source type="image/webp" srcSet={baseData.image} />
                <img
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
  return null
}

// image could be retrieved from supabase
