import { Card } from '@Components/v2/Card/Card'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Card render testing', () => {
  it('should render', () => {
    render(
      <Card>
        <div>Test</div>
      </Card>
    )
    expect(screen.getByText('Test')).toBeTruthy()
  })
})
