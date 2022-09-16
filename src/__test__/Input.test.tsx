// @ts-nocheck
import { Input } from '@Components/Inputs/Input'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterAll, describe, expect, it, vi } from 'vitest'

describe('Item Rendering tests', () => {
  afterAll(cleanup)
  it('render without label, required', () => {
    render(<Input name="name" />)
    expect(screen.queryByText(/label/i)).toBeNull()
  })
  it('render without name', () => {
    expect(() => render(<Input />)).toThrowError()
  })

  it('render with label, required', () => {
    render(<Input label="label" name="name" required />)
    expect(screen.getByText(/label/i)).toBeTruthy()
    expect(screen.getByText('*')).toBeTruthy()
  })

  it('render with placeholder', () => {
    render(<Input label="label" name="name" placeholder="placeholder" />)
    expect(screen.getByPlaceholderText('placeholder')).toBeTruthy()
  })
  it('render with error', () => {
    render(<Input label="label" name="name" error="Error Message" />)
    expect(screen.getByText('Error Message')).toBeTruthy()
  })

  it('it changes content and renders content', () => {
    render(<Input placeholder="placeholder" name="name" />)
    const input = screen.getByPlaceholderText('placeholder')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })

  it('it renders an call onChange function', () => {
    const onChange = vi.fn()
    render(
      <Input
        label="label"
        name="name"
        placeholder="placeholder"
        onChange={onChange}
      />
    )
    const input = screen.getByPlaceholderText('placeholder')
    fireEvent.change(input, { target: { value: 'test' } })
    setTimeout(() => {
      expect(onChange).toBeCalledTimes(1)
    }, 10)
  })
})
