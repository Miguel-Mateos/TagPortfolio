import { SeeMore } from '@Components/v2/SeeMore/SeeMore'
import { cleanup, prettyDOM, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

describe('See More Variant renders', () => {
  afterEach(cleanup)
  it('renders without styles', () => {
    render(<SeeMore role="see-more" />)
    expect(screen.getByRole('see-more').style.length).toBe(3)
  })

  it('renders with styles', () => {
    render(<SeeMore role="see-more" styles={{ color: 'red' }} />)
    expect(screen.getByRole('see-more').style.length).toBe(4)
  })

  it('renders with className', () => {
    render(<SeeMore role="see-more" className="test" />)
    expect(screen.getByRole('see-more').classList.contains('test')).toBe(true)
  })
})
