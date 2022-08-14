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