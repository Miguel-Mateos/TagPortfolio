import { test, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TextCarousel } from './TextCarousel'

test('render TextCarousel', () => {
  const wrapper = render(
    <TextCarousel arr={['Hello World']} title="Title Test" />
  )
  const title = wrapper.container.querySelector('.text-carousel-subtitle')
  expect(title?.textContent).toContain('Title Test')
})

test('render carousel and check if its none or block', () => {
  const wrapper = render(
    <TextCarousel arr={['Hello World', 'Hello World 2']} title="Title Test" />
  )

  const text = wrapper.container.querySelector('.text-carousel-text-container')
  const text1 = text?.children[0]
  expect(text1?.getAttribute('style')).toContain('block')

  it('expect to have display none after 4.5s', () => {
    const wrapper = render(
      <TextCarousel arr={['Hello World', 'Hello World 2']} title="Title Test" />
    )

    const text = wrapper.container.querySelector(
      '.text-carousel-text-container'
    )
    const text1 = text?.children[0]

    setTimeout(() => {
      expect(text1?.getAttribute('style')).toContain('none')
    }, 4500)
  })
})
