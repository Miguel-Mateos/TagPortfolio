import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import { Quote } from './Quote'

test('render quote', () => {
  const wrapper = render(<Quote quote="Hello World" />)
  expect(wrapper).toContain(/Hello World/i)
})

test('render quote without text', () => {
  const wrapper = render(<Quote quote="" />)
  expect(wrapper).not.toContain(/Hello World/i)
})
