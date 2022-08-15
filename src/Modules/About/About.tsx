import { TextCarousel } from '../../Components/TextCarousel/TextCarousel'
import { useAppContext } from '../../Context/ContextApi'
import './about.css'

enum AboutType {
  Employee = 'employee',
  Person = 'person'
}

export const About = () => {
  const { aboutDescriptions: descriptions } = useAppContext()
  let person: string[] = [],
    employee: string[] = []

  descriptions.forEach((desc) => {
    if (desc.as === AboutType.Person) person.push(desc.content)
    if (desc.as === AboutType.Employee) employee.push(desc.content)
  })

  // translate literals
  return (
    <section className="default-section">
      <div className="description">
        <h1 className="title-box">About Me</h1>
        <TextCarousel title="As a Person" arr={person} />
        <TextCarousel title="As an Employee" arr={employee} />
      </div>
    </section>
  )
}
