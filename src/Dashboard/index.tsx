import { Input, TextArea } from '@Components/Inputs/Input'
import { useAppContextV2 } from '@Context/ContextV2'
import { useState } from 'react'
import './styles.css'
const tables: TTables[] = ['projects_v2', 'greeting', 'cert_ref', 'work_v2']
const modes = ['read', 'add', 'delete', 'update']

type TTables = 'projects_v2' | 'greeting' | 'cert_ref' | 'work_v2'

export const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [table, setTable] = useState(tables[0])
  const [mode, setMode] = useState('add')
  return (
    <div style={{ margin: '32px' }}>
      <h1>Dashboard</h1>
      <div>Hola que tal</div>
      <button onClick={() => setOpen(!open)}>Open Dialog</button>
      <h2>Select CRUD mode</h2>
      <div className="dashboard-selector">
        {modes.map((mode, idx) => (
          <button
            key={idx + 'mode'}
            className="dashboard-select-button"
            onClick={() => setMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>
      <h2 style={{ marginTop: '32px' }}>Select Table To Crud</h2>
      <div className="dashboard-selector">
        {tables.map((table, idx) => (
          <button key={idx + 'table'} onClick={() => setTable(table)}>
            {table}
          </button>
        ))}
      </div>
      <TableCrud table={table} mode={mode} />
      <Auth open={open} setOpen={setOpen} />
    </div>
  )
}

interface AuthProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Auth: React.FC<AuthProps> = ({ open, setOpen }) => {
  const { login } = useAppContextV2()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const { email } = e.target
    console.log(email, e.target)
    login({ email: email.value, password: 'test' })
    setOpen(false)
  }

  return (
    <dialog open={open}>
      <div>Auth</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" />
          <button type="submit">Login</button>
        </form>
      </div>
    </dialog>
  )
}

interface TableCrudProps {
  mode: string
  table: TTables
}

const TableCrud: React.FC<TableCrudProps> = ({ mode, table }) => {
  if (mode === 'read') {
    return <TableRead table={table} />
  }

  if (mode === 'delete') {
    return <TableDelete table={table} />
  }

  if (mode === 'update') {
    return <TableUpdate table={table} />
  }

  if (mode === 'add') {
    return <TableAdd table={table} />
  }

  return null
}

const TableRead = ({ table }: { table: TTables }) => {
  return <div>Read</div>
}

const TableDelete = ({ table }: { table: TTables }) => {
  return <div>Delete</div>
}

const TableUpdate = ({ table }: { table: TTables }) => {
  if (table === 'greeting')
    return (
      <div>
        <h3 className="dashboard-tablecrud-title">Add Projects</h3>
        <form>
          <div className="dashboard-form">
            <TextArea name="experience" placeholder="experience" />
            <TextArea name="skills" placeholder="skills" />
            <TextArea name="strengths" placeholder="strengths" />
            <Input name="position" placeholder="Position" />
          </div>
          <button className="dashboard-submit" type="submit">
            Update Greeting
          </button>
        </form>
      </div>
    )
  return null
}

const TableAdd = ({ table }: { table: TTables }) => {
  if (table === 'projects_v2') {
    return (
      <div>
        <h3 className="dashboard-tablecrud-title">Add Projects</h3>
        <form>
          <div className="dashboard-form">
            <Input name="name" placeholder="Name" />
            <Input name="subtitle" placeholder="Subtitle" />
            <TextArea
              name="short_description"
              placeholder="Short Description"
            />
            <TextArea name="long_description" placeholder="Long Description" />
            <Input name="client" placeholder="Client" />
            <Input name="date" placeholder="date" />
            <Input name="project_type" placeholder="project_type" />
            <Input name="tech_stack" placeholder="tech_stack" />
            <Input name="methodology" placeholder="methodology" />
            <Input name="agreement" placeholder="agreement" />
            <Input name="contender" placeholder="contender" />
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
        <form>
          <div className="dashboard-form">
            <Input name="client" placeholder="Client" />
            <Input name="date" placeholder="date" />
            <Input name="project_type" placeholder="project_type" />
            <Input name="description" placeholder="description" />
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
