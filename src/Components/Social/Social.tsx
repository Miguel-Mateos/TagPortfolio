import { Linkedin } from '../../Icons/Linkedin'
import { Github } from '../../Icons/Github'

export const Social = () => {
  return (
    <section className="default-section_right">
      <p style={{ fontWeight: 500 }}>More about me at:</p>
      <button className="button minimal linkedin">
        <a
          href="https://www.linkedin.com/in/i%C3%B1igo-moreno-ramos-175928167/"
          target="_blank"
        >
          <Linkedin />
        </a>
      </button>
      <button className="button minimal github">
        <a href="https://github.com/Eneko96" target="_blank">
          <Github />
        </a>
      </button>
    </section>
  )
}
