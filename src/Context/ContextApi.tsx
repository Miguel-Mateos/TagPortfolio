import { createClient } from '@supabase/supabase-js'
import React, {
  createContext,
  useState,
  FC,
  useEffect,
  useContext
} from 'react'

export interface IProject {
  id: number
  name: string
  associate: string
  description: string
}

export interface IDescriptions {
  id: number
  created_at: string
  work_id: number
  language: 'es' | 'en'
  content: string
}

export interface IProjectDescription {
  id: number
  created_at: string
  project_id: number
  language: 'es' | 'en'
  content: string
}

export const AppContext = createContext<IAppContext | null>(null)

const AppProvider: FC<any> = ({ children }) => {
  const [description, setDescription] = useState<string>('')
  const [language, setLanguage] = useState<string>('en-US')
  const [descriptions, setDescriptions] = useState<IDescriptions[]>([])
  const [projectDescriptions, setProjectDescriptions] = useState<
    IProjectDescription[]
  >([])
  const [works, setWorks] = useState<string[]>([])
  const [projects, setProjects] = useState<IProject[]>([])
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  let timer: any

  const getDescription = async () => {
    const { data } = await supabase.from('Experience').select()
    return data
  }

  const getWorks = async () => {
    const { data } = await supabase.from('Work').select()
    return data
  }

  const changeLanguage = (lan: string) => setLanguage(lan)

  const getProjects = async () => {
    const { data } = await supabase.from('Projects').select()
    return data
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
        setWorks(works || [])
        setProjects(projects || [])
      }
    )
  }

  const getDescriptions = async () => {
    const { data } = await supabase
      .from('Description')
      .select()
      .eq('language', language.slice(0, 2))
    setDescriptions(data || [])
  }

  const getProjectDescriptions = async () => {
    const { data } = await supabase
      .from('Projects_Language')
      .select()
      .eq('language', language.slice(0, 2))
    setProjectDescriptions(data || [])
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getDescriptions()
    getProjectDescriptions()
  }, [language])

  return (
    <AppContext.Provider
      value={{
        supabase,
        auth: supabase.auth,
        projects,
        description,
        descriptions,
        language,
        changeLanguage,
        works,
        projectDescriptions
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

interface IAppContext {
  supabase: any
  auth: any
  projects: IProject[]
  description: string
  descriptions: IDescriptions[]
  language: string
  changeLanguage: (lan: string) => void
  works: string[]
  achievements?: string[]
  projectDescriptions: IProjectDescription[]
}

// extend the context of the app context for ts compatibility
const useAppContext = () => useContext(AppContext) as IAppContext

export { AppContext as default, AppProvider, useAppContext }
