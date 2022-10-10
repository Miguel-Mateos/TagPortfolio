import { describe, it, expect, vi, afterEach } from 'vitest'
import { DevWarning } from '@Components/v2/DevWarning'
import { cleanup, render, screen } from '@testing-library/react'

describe('DevWarning', () => {
  afterEach(cleanup)
  it('should be defined', () => {
    expect(DevWarning).toBeDefined()
  })
  it('should be shown', () => {
    render(<DevWarning />)
    expect(screen.getByText('Page Under Development')).toBeDefined()
  })
  it('should be hidden', () => {
    vi.spyOn(window.localStorage, 'getItem').mockReturnValue('true')
    render(<DevWarning />)
    expect(screen.queryByText('Page Under Development')).toBeNull()
  })
})
