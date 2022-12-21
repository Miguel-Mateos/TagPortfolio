import { Stack } from '../../Components/Stack/Stack'
import { CaseStudies } from '../../Components/v2/CaseStudies/CaseStudies'
import { Section } from '../../Components/v2/Section'
import { Studies } from '../../Components/v2/Studies/Studies'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
import { useAppContextV2 } from '@Context/ContextV2'
import './styles.css'

export const Home = () => {
  const { baseData } = useAppContextV2()
  if (baseData)
    return (
      <div role="main">
        <HeadLine title="Hey welcome to my portfolio!" />
        <div className="content home-container">
          <div className="home-hero-container">
            <div className="home-hero-brief">
              <h1 className="home-hero-title">
                I am {baseData.name}, {baseData.position}
              </h1>
              <div className="subtitle">
                Experience In the Following industries
              </div>
              <div className="base">{baseData.experience}</div>
              <br />
              <div className="subtitle">Core skills</div>
              <div className="base">{baseData.skills}</div>
              <br />
              <div className="subtitle">Cliffton Strengths</div>
              <div className="base">{baseData.strengths}</div>
            </div>
            <div className="home-hero-image">
              <picture>
                <source media="(max-width: 768px)" type="image/png" />
                <source type="image/png" srcSet={baseData.image} />
                <img
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
