import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
const mockTitle = 'mock title'

describe('render HeadLine variants', () => {
  afterEach(cleanup)
  it('renders without title', () => {
    render(<HeadLine title={''} />)
    expect(screen.queryByText('mock title')).toBeNull()
  })
  it('renders with title', () => {
    render(<HeadLine title={mockTitle} />)
    expect(screen.getByText(mockTitle)).toBeTruthy()
  })
})
