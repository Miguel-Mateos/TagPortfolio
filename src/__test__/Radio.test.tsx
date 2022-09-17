// @ts-nocheck
import { Radio } from '@Components/Inputs/Input'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterAll, describe, expect, it, vi } from 'vitest'

describe('Radio Test rendering', () => {
  it('should throw error if it does not have name', () => {
    expect(() => render(<Radio />)).toThrowError()
  })

  it('should render without error if it has name', () => {
    expect(() => render(<Radio name="test" />)).not.toThrowError()
  })

  it('should render with label', () => {
    render(<Radio name="test" label="test" />)
    expect(screen.getByText('test')).toBeTruthy()
  })

  it('should render active', () => {
    render(<Radio name="test" readOnly checked role="radio" />)
    const radio = screen.getByRole('radio')
    expect(radio.checked).toBeTruthy()
  })

  it('should render inactive', () => {
    render(<Radio name="test" role="radio" />)
    const radio = screen.getByRole('radio')
    expect(radio.checked).toBeFalsy()
  })

  it('onChange function should be called when clicked', () => {
    const onClick = vi.fn()
    render(<Radio name="test" onClick={onClick} />)
    const radio = screen.getByRole('radio')
    fireEvent.click(radio)
    expect(onClick).toBeCalledTimes(1)
  })
})
