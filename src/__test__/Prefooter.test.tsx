import { describe, it, expect, afterEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { PreFooter } from '@Components/v2/PreFooter/PreFooter'

describe('PreFooter', () => {
  afterEach(cleanup)
  it('should be defined', () => {
    expect(PreFooter).toBeDefined()
  })

  it('should render', () => {
    vi.mock('react-router-dom', () => ({
      ...vi.importActual('react-router-dom'),
      useNavigate: () => console.log // Return an empty jest function to test whether it was called or not...I'm not depending on the results so no need to put in a return value
    }))
    render(<PreFooter />)
    expect(screen.getByText("Let's Book a Call")).toBeTruthy()
  })
})
