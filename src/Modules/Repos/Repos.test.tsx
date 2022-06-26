import { Repos } from './Repos'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

const reposContent = [
  {
    name: 'patata',
    clone_url: '',
    created_at: new Date().toString(),
    description: '',
    updated_at: new Date().toString(),
    homepage: ''
  },
  {
    name: 'potato',
    clone_url: '',
    created_at: new Date().toString(),
    description: '',
    updated_at: new Date().toString(),
    homepage: ''
  }
]

const ReposTest = () => {
  return <Repos repos={reposContent} />
}

describe('repos renders correctly', () => {
  it('renders', () => {
    const result = render(<ReposTest />)
    expect(result.getByText(/patata/i)).toBeDefined()
  })
})
