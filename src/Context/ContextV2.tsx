import { createClient } from '@supabase/supabase-js'
import { createContext, useContext } from 'react'

export const AppContextV2 = createContext<any | null>(null)

const AppProviderV2: React.FC<any> = ({ children }) => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const createEvent = async (event: any) => {
    const { status } = await supabase.from('Bookings').upsert(event)
    return { status }
  }

  return (
    <AppContextV2.Provider
      value={{
        createEvent,
        auth: supabase.auth
      }}
    >
      {children}
    </AppContextV2.Provider>
  )
}

const useAppContextV2 = () => useContext(AppContextV2)
export { AppContextV2 as default, AppProviderV2, useAppContextV2 }
