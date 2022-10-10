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

export interface ITech_Stack {
  id: string
  greeting_id: string
  created_at: string
  css: boolean
  html: boolean
  js: boolean
  react: boolean
  redux: boolean
  typescript: boolean
  node: boolean
  express: boolean
  mongodb: boolean
  postgresql: boolean
  git: boolean
  github: boolean
  gitlab: boolean
  docker: boolean
  aws: boolean
  heroku: boolean
  netlify: boolean
  vercel: boolean
  firebase: boolean
  jest: boolean
  cypress: boolean
  react_testing_library: boolean
  enzyme: boolean
  styled_components: boolean
  material_ui: boolean
  bootstrap: boolean
  tailwind: boolean
  sass: boolean
  less: boolean
  css_modules: boolean
  css_in_js: boolean
  next: boolean
  gatsby: boolean
  graphql: boolean
  apollo: boolean
  prisma: boolean
  sequelize: boolean
  sass: boolean
  svelte: boolean
}

export interface ILog {
  greeting_id?: number
  name: string
  surname: string
  email: string
  company_name: string
  position: string
  additional_information: string
  salary_range: string
  available: Date
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
  tech_stack: ITech_Stack[]
}

export interface IUseAppContextV2 {
  projects: IProjects[]
  auth: any
  createEvent: (event: any) => { status: number }
  getProjects: () => { data: IProjects[] }
  getHomeData: () => { data: any }
  getBookings: () => { data: any }
  getWorks: () => { data: any }
  getGreetings: () => { data: any }
  getCerts: () => { data: any }
  addWork: (work: any) => { status: number }
  addLog: (log: ILog) => { status: number }
  login: any
  baseData: IBaseData
}
