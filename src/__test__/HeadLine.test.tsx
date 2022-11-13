import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, describe, it, expect } from 'vitest'
import { HeadLine } from '@Components/v2/HeadLine/HeadLine'
const mockTitle = 'mock title'

describe('render HeadLine variants', () => {
  afterEach(cleanup)
  it('renders without title', () => {
    render(
      <BrowserRouter>
        <HeadLine title={''} />
      </BrowserRouter>
    )
    expect(screen.queryByText('mock title')).toBeNull()
  })
  it('renders with title', () => {
    render(
      <BrowserRouter>
        <HeadLine title={mockTitle} />
      </BrowserRouter>
    )
    expect(screen.getByText(mockTitle)).toBeTruthy()
  })
})
