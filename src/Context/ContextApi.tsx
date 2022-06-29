import { createClient } from '@supabase/supabase-js'
import { createContext, useState, FC, useEffect, useContext } from 'react'

export interface IProject {
  name: string
  associate: string
  description: string
}

export const AppContext = createContext({})

const AppProvider: FC<any> = ({ children }) => {
  const [description, setDescription] = useState<string>('')
  const [works, setWorks] = useState<string[]>([])
  const [projects, setProjects] = useState<IProject[]>([])
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  const getDescription = async () => {
    const { data } = await supabase.from('Experience').select()
    return data
    // if (data) {
    //   setDescription(
    //     data[0]?.description ? data[0].description : 'No description Provided'
    //   )
    // }
  }

  const getWorks = async () => {
    const { data } = await supabase.from('Work').select()
    return data
  }

  const getProjects = async () => {
    const { data } = await supabase.from('Projects').select()
    return data
    // if (data) setProjects(data)
  }

  const getData = async () => {
    Promise.all([getDescription(), getWorks(), getProjects()]).then(
      (values) => {
        const [description, works, projects] = values
        if (description)
          setDescription(
            description[0]?.description
              ? description[0].description
              : 'No description Provided'
          )
        setWorks(works as string[])
        setProjects(projects as IProject[])
      }
    )
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
        projects,
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
