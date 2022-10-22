import { TResponse } from '../types'

export const responseHandler = (response: Response, type?: TResponse) => {
  if (type === 'text') return response.text()
  return response.json()
}
