import { Input, TextArea } from '@Components/Inputs/Input'
import Select from '@TagDs/components/select/select'
import SelectOption from '@TagDs/components/select/selectOption'
import { useState } from 'react'
import { TTables } from '..'
import { useCrud } from '../useCrud'

const stackOptions = [
  'React',
  'JavaScript',
  'CSS',
  'Tailwind',
  'HTML',
  'NodeJS',
  'Supabase',
  'Typescript',
  'PostgreSQL',
  'SQL',
  'Svelte',
  'Github'
]

export const TableAdd = ({ table }: { table: TTables }) => {
  const { onSubmit } = useCrud()
  const [selectedStack, setSelectedStack] = useState<string[]>([])
  if (table === 'projects_v2') {
    return (
      <div>
        <h3 className="dashboard-tablecrud-title">Add Projects</h3>
        <form
          onSubmit={(e) =>
            onSubmit(e, {
              extra: { name: 'tech_stack', value: selectedStack }
            })
          }
        >
          <div className="dashboard-form">
            <Input name="name" placeholder="Name" label="name" />
            <Input name="subtitle" placeholder="Subtitle" label="subtitle" />
            <TextArea
              name="short_description"
              placeholder="Short Description"
              label="short description"
            />
            <TextArea
              name="long_description"
              placeholder="Long Description"
              label="long description"
            />
            <Input name="client" placeholder="Client" label="client" />
            <Input type="date" name="date" placeholder="date" label="date" />
            <Input
              name="project_type"
              placeholder="project_type"
              label="project type"
            />
            <Select
              filter
              label="tech stack"
              multiple
              name="tech_stack"
              placeholder="Select an option"
              required
              onChange={setSelectedStack}
            >
              {stackOptions.map((option, idx) => (
                <SelectOption
                  key={idx + 'stack-option'}
                  label={option}
                  value={option}
                />
              ))}
            </Select>
            <Input
              name="methodology"
              placeholder="methodology"
              label="methodology"
            />
            <Input name="agreement" placeholder="agreement" label="agreement" />
            <Input name="contender" placeholder="contender" label="contender" />
          </div>
          <button className="dashboard-submit" type="submit">
            Add Project
          </button>
        </form>
      </div>
    )
  }

  if (table === 'work_v2') {
    return (
      <div>
        <h3 className="dashboard-tablecrud-title">Add Projects</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="dashboard-form">
            <Input name="client" placeholder="Client" />
            <Input type="date" name="date" placeholder="date" />
            <Input name="project_type" placeholder="project_type" />
            <TextArea name="description" placeholder="description" />
          </div>
          <button className="dashboard-submit" type="submit">
            Add Work
          </button>
        </form>
      </div>
    )
  }

  if (table === 'cert_ref') {
    return (
      <div>
        <h3 className="dashboard-tablecrud-title">
          Add Certification or reference
        </h3>
        <form>
          <div className="dashboard-form">
            <Input name="name" placeholder="Name" />
            <Input name="type" placeholder="Type" />
            <Input name="date" placeholder="date" />
            <Input name="subtitle" placeholder="subtitle" />
            <TextArea name="description" placeholder="description" />
          </div>
          <button className="dashboard-submit" type="submit">
            Add Cert
          </button>
        </form>
      </div>
    )
  }

  return <h3 className="dashboard-tablecrud-title">Non Addable</h3>
}
