import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Section } from '@Components/v2/Section'
import { AppContextV2 } from '@Context/ContextV2'

describe('Section', () => {
  afterEach(cleanup)
  it('should render the component', () => {
    expect(Section).toBeDefined()
  })

  it('should render with information', () => {
    render(
      <AppContextV2.Provider
        value={{
          baseData: {
            work_v2: [
              {
                id: '1',
                project_type: 'projectType',
                client: 'client',
                date: 'date',
                description: ['description'],
                tech_stack: ['tech_stack']
              },
              {
                id: '1',
                project_type: 'projectType',
                client: 'client',
                date: 'date',
                description: ['description'],
                tech_stack: ['tech_stack']
              }
            ]
          }
        }}
      >
        <Section />
      </AppContextV2.Provider>
    )
    expect(screen.getByText('Work Experience')).toBeTruthy()
  })

  it('should render with ')
})
