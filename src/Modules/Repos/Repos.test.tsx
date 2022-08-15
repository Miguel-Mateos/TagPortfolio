import { Repos } from './Repos'
import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { AppProvider } from '../../Context/ContextApi'

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
    name: 'potate',
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
    const result = render(
      <AppProvider>
        <ReposTest />
      </AppProvider>
    )
    expect(result.getByText(/patata/i)).toBeDefined()
  })

  it('card with see more', () => {
    const result = render(
      <AppProvider>
        <ReposTest />
      </AppProvider>
    )
    expect(result.getByText(/see more/i)).toBeDefined()
  })

  it('card with see less', () => {
    const result = render(
      <AppProvider>
        <ReposTest />
      </AppProvider>
    )

    fireEvent.click(result.getByText(/see more/i))
    expect(result.getByText(/see less/i)).toBeDefined()
  })
})
