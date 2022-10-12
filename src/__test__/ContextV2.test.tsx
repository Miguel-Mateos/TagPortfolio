// @ts-nocheck
import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup, screen } from '@testing-library/react'
import { AppContextV2, AppProviderV2 } from '../Context/ContextV2'

describe('ContextV2', () => {
  afterEach(cleanup)
  it('should be defined', () => {
    expect(AppProviderV2).toBeDefined()
  })

  it('should render with children', () => {
    render(<AppProviderV2>Hello</AppProviderV2>)
    expect(screen.getByText('Hello')).toBeTruthy()
  })

  it('should render and call function', () => {
    render(
      <AppContextV2.Provider value={{ hello: 'hello' }}>
        <AppContextV2.Consumer>
          {({ hello }) => <div>{hello}</div>}
        </AppContextV2.Consumer>
      </AppContextV2.Provider>
    )
    expect(screen.getByText('hello')).toBeTruthy()
  })
})
