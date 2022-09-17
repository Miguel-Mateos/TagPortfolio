import { createClient } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'
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

  const getBookings = async () => {
    const { data } = await supabase.from('booking').select('*')
    return data
  }

  const getWorks = async () => {
    const { data } = await supabase.from('work').select('*')
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
        getCerts
      }}
    >
      {children}
    </AppContextV2.Provider>
  )
}

const useAppContextV2 = () => useContext(AppContextV2) as IUseAppContextV2
export { AppContextV2 as default, AppProviderV2, useAppContextV2 }
