import { Head } from './Head'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

describe('Renders head and have text content', () => {
  it('renders', () => {
    const result = render(<Head />)
    expect(result.getByText(/Welcome To My/i)).toBeDefined()
    expect(result.getByText(/Portfolio/i)).toBeDefined()
  })
})
