import { createClient } from '@supabase/supabase-js'
import { createContext, useState, FC, useEffect, useContext } from 'react'

export const AppContext = createContext({})

const AppProvider: FC<any> = ({ children }) => {
  const [description, setDescription] = useState<string>('')
  const [works, setWorks] = useState<string[]>([])
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const getDescription = async () => {
    const { data } = await supabase.from('Experience').select()

    if (data) {
      setDescription(
        data[0]?.description ? data[0].description : 'No description Provided'
      )
    }
  }

  const getWorks = async () => {
    const { data } = await supabase.from('Work').select()

    if (data) {
      setWorks(data)
    }
  }

  useEffect(() => {
    getDescription()
    getWorks()
  }, [])

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
        description,
        works
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext as any)

export { AppContext as default, AppProvider, useAppContext }
