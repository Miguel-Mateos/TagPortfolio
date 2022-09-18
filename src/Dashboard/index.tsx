import { useAppContextV2 } from '@Context/ContextV2'

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div>Hola que tal</div>
      <Auth />
    </>
  )
}

const Auth = () => {
  const { login } = useAppContextV2()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const { email } = e.target
    console.log(email, e.target)
    login({ email: email.value, password: 'test' })
  }

  return (
    <dialog open>
      <div>Auth</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value="imoreno.main@gmail.com"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </dialog>
  )
}
