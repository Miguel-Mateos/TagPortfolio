export interface IProjects {
  name: string
  subtitle: string
  short_description: string
  long_description: string
  client: string
  date: Date
  project_type: string
  tech_stack: string[]
  methodology: string
  agreement: string
  contender: string
}

export interface IWorks {
  id: string
  client: string
  date: string
  project_type: string
  description: string[]
  tech_stack: string[]
}

export interface ICertRef {
  id: string
  name: string
  date: string
  subtitle: string
  description: string[]
}

export interface IBaseData {
  name: string
  image: string
  position: string
  experience: string
  skills: string
  strengths: string
  id: number
  work_v2: IWorks[]
  projects_v2: IProjects[]
  cert_ref: ICertRef[]
  booking: Object[]
}

export interface IUseAppContextV2 {
  projects: IProjects[]
  auth: any
  createEvent: (event: any) => { status: number }
  getProjects: () => { data: IProjects[] },
  getHomeData: () => { data: any }
  getBookings: () => { data: any }
  getWorks: () => { data: any }
  getGreetings: () => { data: any }
  getCerts: () => { data: any }
  addWork: (work: any) => { status: number }
  login: any
  baseData: IBaseData
}