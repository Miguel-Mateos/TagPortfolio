import { describe, it, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { BookSelector } from '@Pages/v2/Book/BookCard'

describe('BookCard', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<BookSelector />)
    expect(screen.getByText('Choose Next Slot Available')).toBeTruthy()
  })

  it('should have 5 card', () => {
    render(<BookSelector />)
    expect(screen.getAllByText('17:30 PM').length).toBe(5)
  })
})
