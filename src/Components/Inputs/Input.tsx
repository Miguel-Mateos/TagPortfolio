import './styles.css'

interface CommonInputProps {
  label?: string
  name: string
  id?: string
  defaultValue?: string
  placeholder?: string
  type?: string
  required?: boolean
  error?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
  ...rest
}) => {
  return (
    <div className="input-wrapper" style={{ width: '100%' }}>
      <label className="caption">
        {label}
        {required && <small>*</small>}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        {...rest}
      />
      {error && <p className="input-helper-text input-error-text">Error</p>}
    </div>
  )
}

export const Radio: React.FC<
  TCommonInputProps<React.InputHTMLAttributes<HTMLInputElement>>
> = ({ label, name, id, ...rest }) => (
  <div className="tag-ds radio-container">
    <input id={id} type="radio" name={name} {...rest} />
    <label htmlFor="radio">{label}</label>
  </div>
)

export const TextArea: React.FC<
  TCommonInputProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>>
> = ({ label, required, name, placeholder, ...rest }) => (
  <div className="tag-ds input-wrapper ">
    <label className="caption">
      {label}
      {required && <span className="required">*</span>}
    </label>
    <textarea placeholder={placeholder} {...rest} />
  </div>
)
