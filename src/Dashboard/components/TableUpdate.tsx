import { Input, TextArea } from '@Components/Inputs/Input'
import { TTables } from '..'

export const TableUpdate = ({ table }: { table: TTables }) => {
  if (table === 'greeting')
    return (
      <div>
        <h3 className="dashboard-tablecrud-title">Add Projects</h3>
        <form>
          <div className="dashboard-form">
            <TextArea
              name="experience"
              placeholder="experience"
              label="experience"
            />
            <TextArea name="skills" placeholder="skills" label="skills" />
            <TextArea
              name="strengths"
              placeholder="strengths"
              label="strengths"
            />
            <Input name="position" placeholder="Position" label="position" />
          </div>
          <button className="dashboard-submit" type="submit">
            Update Greeting
          </button>
        </form>
      </div>
    )
  return null
}
