import { createClient } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState } from 'react'
import { IProjects, IUseAppContextV2, IBaseData, ILog } from './types'

export const AppContextV2 = createContext<IUseAppContextV2 | null>(null)

const AppProviderV2: React.FC<any> = ({ children }) => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [id, setId] = useState<number>(0)
  const [baseData, setBaseData] = useState<any | null>(null)

  const createEvent = async (event: any) => {
    const { status } = await supabase
      .from<IProjects[]>('Bookings')
      .upsert(event)
    return { status }
  }

  const getProjects = async () => {
    const { data } = await supabase.from<IProjects>('projects_v2').select('*')
    return data
  }

  const getData = async () => {
    const { data } = await supabase
      .from<IBaseData>('greeting')
      .select(
        `
      *,
      work_v2 (
        id,
        client,
        date,
        project_type,
        description,
        tech_stack
      ),
      projects_v2 (
        id
      ),
      cert_ref (
        id,
        name,
        type,
        date,
        subtitle,
        description
      ),
      booking (
        id
      ),
      tech_stack (
        *
      )
    `
      )
      .order('id', { foreignTable: 'work_v2', ascending: true })
      .single()
    if (data) {
      setId(data?.id)
      setBaseData(data)
    }
  }

  const getBookings = async () => {
    const { data } = await supabase.from('booking').select('*')
    return data
  }

  const getWorks = async () => {
    const { data } = await supabase.from('work_v2').select(`
    client, date, project_type, description`)
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

  const addWork = async (data: any) => {
    const tempData = { ...data }
    tempData.greeting_id = id
    const { status } = await supabase.from('work_v2').insert(tempData)
    return { status }
  }

  const addLog = async (log: ILog) => {
    const tempData = { ...log }
    const { status } = await supabase.from('logger').insert(tempData)
    return { status }
  }

  const login = async ({
    email,
    password
  }: {
    email: string
    password: string
  }) => {
    const { user, error, session } = await supabase.auth.signIn({
      email,
      password
    })
    return { user, error, session }
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
        getBookings,
        getWorks,
        getGreeting,
        getCerts,
        login,
        baseData,
        addWork,
        addLog
      }}
    >
      {children}
    </AppContextV2.Provider>
  )
}

const useAppContextV2 = () => useContext(AppContextV2) as IUseAppContextV2
export { AppContextV2 as default, AppProviderV2, useAppContextV2 }
