import { createClient } from '@supabase/supabase-js'
import { createContext, useContext, useEffect } from 'react'
import { IProjects, IUseAppContextV2 } from './types'

export const AppContextV2 = createContext<any | null>(null)

const AppProviderV2: React.FC<any> = ({ children }) => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const createEvent = async (event: any) => {
    const { status } = await supabase
      .from<IProjects[]>('Bookings')
      .upsert(event)
    return { status }
  }

  const getProjects = async () => {
    const { data } = await supabase.from('projects_v2').select('*')
    return data
  }

  const getHomeData = async () => {
    Promise.all([
      getBookings(),
      getProjects(),
      getGreeting(),
      getCerts(),
      getWorks()
    ]).then((values) => {
      const [booking, projects, greeting, cert, works] = values
      return { booking, projects, greeting, cert, works }
    })
  }

  const getData = async () => {
    const { data } = await supabase.from('greeting').select(`
      id,
      name,
      work_v2 (
        id
      ),
      projects_v2 (
        id
      ),
      cert_ref (
        id
      ),
      booking (
        id
      )
    `)
    console.log(data)
  }

  const getBookings = async () => {
    const { data } = await supabase.from('booking').select('*')
    return data
  }

  const getWorks = async () => {
    const { data } = await supabase.from('work_v2').select('*')
    return data
  }

  const getGreeting = async () => {
    const { data } = await supabase.from('greeting').select('*')
    return data
  }

  const getCerts = async () => {
    const { data } = await supabase.from('cert_ref').select('*')
    return data
  }

  const login = async ({
    email,
    password
  }: {
    email: string
    password: string
  }) => {
    console.log('login')
    const { user, error, session } = await supabase.auth.signIn({
      email,
      password
    })
    console.log(user, error, session)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <AppContextV2.Provider
      value={{
        createEvent,
        auth: supabase.auth,
        getProjects,
        getHomeData,
        getBookings,
        getWorks,
        getGreeting,
        getCerts,
        login
      }}
    >
      {children}
    </AppContextV2.Provider>
  )
}

const useAppContextV2 = () => useContext(AppContextV2) as IUseAppContextV2
export { AppContextV2 as default, AppProviderV2, useAppContextV2 }
