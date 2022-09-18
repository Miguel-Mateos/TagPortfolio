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
  login: any
}