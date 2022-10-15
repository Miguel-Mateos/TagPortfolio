import './styles.css'

interface CommonInputProps {
  label?: string
  name: string
  id?: string
  defaultValue?: string
  placeholder?: string
  type?: string
  required?: boolean
  error?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  [key: string]: any
}

type TCommonInputProps<T> = CommonInputProps & T

export const Input: React.FC<
  TCommonInputProps<React.InputHTMLAttributes<HTMLInputElement>>
> = ({
  label,
  required,
  name,
  className,
  placeholder,
  type,
  error,
  onChange,
  ...rest
}) => {
  if (!name) console.error(Error('Input must have a name'))
  return (
    <div className="input-wrapper" style={{ width: '100%' }}>
      {label && (
        <label className="caption">
          {label}
          {required && <small>*</small>}
        </label>
      )}
      <input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        {...rest}
      />
      {error && <p className="input-helper-text input-error-text">{error}</p>}
    </div>
  )
}

export const Radio: React.FC<
  TCommonInputProps<React.InputHTMLAttributes<HTMLInputElement>>
> = ({ label, name, id, ...rest }) => {
  if (!name) console.error(Error('Radio must have a name'))
  return (
    <div className="tag-ds radio-container">
      <input id={id} type="radio" name={name} {...rest} />
      <label htmlFor="radio">{label}</label>
    </div>
  )
}

export const TextArea: React.FC<
  TCommonInputProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
> = ({ label, required, name, placeholder, error, onChange, ...rest }) => {
  if (!name) console.error(Error('TextArea must have a name'))
  return (
    <div className="tag-ds input-wrapper ">
      <label className="caption">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        {...rest}
      />
      {error && <p className="input-helper-text input-error-text">{error}</p>}
    </div>
  )
}
