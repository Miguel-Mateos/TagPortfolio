export interface IRepo {
  name: string
  clone_url: string
  created_at: string
  description: string
  updated_at: string
  homepage: string
}

export type TResponse = 'json'
| 'text'
| 'arraybuffer'
| 'blob'
| 'formdata'
| 'stream'
| 'xml'

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

export interface IAboutDescriptions {
  id: number
  language: 'es' | 'en'
  content: string
  as: string
}