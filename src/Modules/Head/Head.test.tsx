import { Head } from './Head'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { AppProvider } from '../../Context/ContextApi'

describe('Renders head and have text content', () => {
  it('renders', () => {
    const result = render(
      <AppProvider>
        <Head />
      </AppProvider>
    )
    expect(result.getByText(/Welcome To My/i)).toBeDefined()
    expect(result.getByText(/Portfolio/i)).toBeDefined()
  })

  it('renders with image', () => {
    // render with image
    const result = render(
      <AppProvider>
        <Head />
      </AppProvider>
    )
    const image = result.getByAltText(/head image/i) as HTMLImageElement
    expect(image.getAttribute('src')).toBe('/first_image.jpg')
    expect(result.getByAltText(/head image/i)).toBeDefined()
  })
})
