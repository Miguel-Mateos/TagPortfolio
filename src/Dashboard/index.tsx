import { Input, TextArea } from '@Components/Inputs/Input'
import { useState } from 'react'
import './styles.css'
import { TableAdd } from './components/TableAdd'
import { TableRead } from './components/TableRead'
import { TableDelete } from './components/TableDelete'
import { TableUpdate } from './components/TableUpdate'
const tables: TTables[] = ['projects_v2', 'greeting', 'cert_ref', 'work_v2']
const modes = ['read', 'add', 'delete', 'update']

export type TTables = 'projects_v2' | 'greeting' | 'cert_ref' | 'work_v2'

export const Dashboard = () => {
  const [table, setTable] = useState(tables[0])
  const [mode, setMode] = useState('add')
  return (
    <div style={{ margin: '32px' }}>
      <h1>Dashboard</h1>
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
    </div>
  )
}

interface AuthProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
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
