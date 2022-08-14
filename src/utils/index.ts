import { TResponse } from "../types";

export const classNames = (str?: string) => str ? str : '';

export const responseHandler = (response: Response, type: TResponse) => {
  if (type === 'json') return response.json()
  if (type === 'text') return response.text()
}