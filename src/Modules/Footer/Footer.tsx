import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const Footer = () => {
  const form = useRef<HTMLFormElement>(null)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAIL_KEY
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }

  const sendMessage = () => {}

  return (
    <footer className="footer">
      <h1 style={{ fontSize: '50px', textAlign: 'left' }}>Contact</h1>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="_name" style={{ display: 'block' }}>
            Nombre
          </label>
          <input id="_name" type="text" placeholder="Nombre" />
        </div>
        <div className="input" style={{ marginTop: '2rem' }}>
          <label htmlFor="email" style={{ display: 'block' }}>
            Email
          </label>
          <input id="email" type="email" placeholder="Email" />
        </div>
        <div className="input" style={{ marginTop: '2rem' }}>
          <label htmlFor="message" style={{ display: 'block' }}>
            Mensaje
          </label>
          <textarea id="message" placeholder="Mensaje" />
        </div>
        <input
          type="submit"
          className="button minimal"
          value="Contact"
          style={{ maxWidth: '20%' }}
        />
      </form>
    </footer>
  )
}
