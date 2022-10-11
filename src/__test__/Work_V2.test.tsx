import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { WorkV2 } from '@Components/v2/Work_v2/Work_V2'

describe('Work_V2', () => {
  afterEach(cleanup)
  it('should render the component', () => {
    expect(WorkV2).toBeDefined()
  })

  it('should render with information', () => {
    render(
      <WorkV2
        id="1"
        client="client"
        date="date"
        projectType="projectType"
        description={['description']}
        tech_stack={['tech_stack']}
      />
    )
    expect(screen.getByText('client')).toBeTruthy()
    expect(screen.getByText('date')).toBeTruthy()
    expect(screen.getByText('projectType')).toBeTruthy()
    expect(screen.getByText('description')).toBeTruthy()
    expect(screen.getByText('tech_stack')).toBeTruthy()
  })
})
