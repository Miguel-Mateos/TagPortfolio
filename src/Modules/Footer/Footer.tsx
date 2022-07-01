export const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = form['_name'].value
    const email = form.email.value
    const message = form.message.value
    console.log(name, email, message)
  }

  return (
    <footer className="footer">
      <form onSubmit={handleSubmit}>
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
