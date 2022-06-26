import { Card } from './Card'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'

const CardTest = () => {
  return (
    <div>
      <Card>Patata</Card>
    </div>
  )
}

describe('card Renders correctly', () => {
  it('renders', () => {
    const result = render(<CardTest />)
    expect(result.getByText(/Patata/i)).toBeDefined()
  })
})
