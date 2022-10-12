// @ts-nocheck
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Studies } from '@Components/v2/Studies/Studies'
import { AppContextV2 } from '@Context/ContextV2'

describe('Studies', () => {
  it('should be defined', () => {
    expect(Studies).toBeDefined()
  })
  it('should render', () => {
    render(
      <AppContextV2.Provider value={{}}>
        <Studies />
      </AppContextV2.Provider>
    )
    expect(screen.getByText('Certifications & References')).toBeTruthy()
  })

  it('should render a card', () => {
    render(
      <AppContextV2.Provider
        value={{
          baseData: {
            cert_ref: [
              {
                date: '2020-01-01',
                description: ['description'],
                subtitle: 'subtitle',
                name: 'name'
              }
            ]
          }
        }}
      >
        <Studies />
      </AppContextV2.Provider>
    )
    expect(screen.getByText('description')).toBeTruthy()
  })
})
