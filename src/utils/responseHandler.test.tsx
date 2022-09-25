import { describe, expect, it } from 'vitest'
import { responseHandler } from './responseHandler'

const mockFetch = async () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
}

describe('response handler behaviour', () => {
  it('returns json', async () => {
    const result = responseHandler(await mockFetch())
    expect(result).resolves.toBeTypeOf('object')
  })

  it('returns json', async () => {
    const result = responseHandler(await mockFetch(), 'text')
    expect(result).resolves.toBeTypeOf('string')
  })
})
