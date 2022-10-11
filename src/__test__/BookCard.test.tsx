import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BookSelector } from '@Pages/v2/Book/BookCard'

describe('BookSelector', () => {
  it('should be defined', () => {
    expect(BookSelector).toBeDefined()
  })
  it('should render', () => {
    render(<BookSelector />)
    expect(screen.getByText(/Choose next slot available/i)).toBeTruthy()
  })
})
