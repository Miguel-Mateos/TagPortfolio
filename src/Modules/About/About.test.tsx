import { render } from '@testing-library/react'
import { expect, test } from 'vitest'
import { AppProvider } from '../../Context/ContextApi'
import { About } from './About'

test('Render About', () => {
  const wrapper = render(
    <AppProvider>
      <About />
    </AppProvider>
  )
  expect(wrapper).toContain(/About Me/i)
})
