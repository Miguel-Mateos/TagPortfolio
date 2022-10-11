import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup, screen } from '@testing-library/react'
import { Footer } from '@Components/v2/Footer/Footer'

describe('Footer', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Footer />)
    expect(screen.getByText('Iñigo Moreno 2022')).toBeTruthy()
  })

  it('should redirect to linkedin', () => {
    render(<Footer />)
    expect(screen.getAllByRole('link')[0].getAttribute('href')).toBe(
      'https://www.linkedin.com/in/i%C3%B1igo-moreno-ramos-175928167/'
    )
  })
  it('should redirect to github', () => {
    render(<Footer />)
    expect(screen.getAllByRole('link')[1].getAttribute('href')).toBe(
      'https://github.com/Eneko96'
    )
  })
})
