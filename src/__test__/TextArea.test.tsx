// @ts-nocheck
import { TextArea } from '@Components/Inputs/Input'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { wait } from './helpers/wait'

describe('TextArea render tests', () => {
  afterEach(cleanup)
  it('should throw error if it does not have name', () => {
    expect(() => render(<TextArea />)).toThrowError()
  })

  it('should render without error if it has name', () => {
    expect(() => render(<TextArea name="test" />)).not.toThrowError()
  })

  it('should render with label', () => {
    const { getByText } = render(<TextArea name="test" label="test" />)
    expect(getByText('test')).toBeTruthy()
  })

  it('should render with required', () => {
    const { getByText } = render(<TextArea name="test" label="test" required />)
    expect(getByText('*')).toBeTruthy()
  })

  it('should render with placeholder', () => {
    const { getByPlaceholderText } = render(
      <TextArea name="test" placeholder="test" />
    )
    expect(getByPlaceholderText('test')).toBeTruthy()
  })

  it('should render with error', () => {
    const { getByText } = render(<TextArea name="test" error="test" />)
    expect(getByText('test')).toBeTruthy()
  })

  it('should render typed value', () => {
    render(<TextArea name="test" />)
    const input = document.querySelector('textarea')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })

  it('should render with custom class', () => {
    const { container } = render(<TextArea name="test" className="test" />)
    expect(container.querySelector('.test')).toBeTruthy()
  })

  it('onChange should be called and only 1 time', () => {
    const onChange = vi.fn()
    render(<TextArea name="test" onChange={onChange} />)
    const input = document.querySelector('textarea')
    fireEvent.change(input, { target: { value: 'test' } })
    wait(100, () => expect(onChange).toBeCalledTimes(1))
  })
})
