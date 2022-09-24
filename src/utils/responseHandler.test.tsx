import { describe, expect, it } from 'vitest'
import { responseHandler } from './responseHandler'

const mockFetch = async () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
}

describe('response handler behaviour', () => {
  it('returns json', async () => {
    const result = responseHandler(await mockFetch())
    console.log(result)
    expect(result).resolves.toBeTypeOf('object')
  })

  it('returns json', async () => {
    const result = responseHandler(await mockFetch(), 'text')
    console.log(result)
    expect(result).resolves.toBeTypeOf('string')
  })
})
