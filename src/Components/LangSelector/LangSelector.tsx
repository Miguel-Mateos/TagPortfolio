import { useAppContext } from '../../Context/ContextApi'

export const LangSelector = () => {
  const { changeLanguage } = useAppContext() as any
  return (
    <div className="language title">
      <span className="language-name" onClick={() => changeLanguage('es-ES')}>
        ES
      </span>
      <span className="language-name" onClick={() => changeLanguage('en-US')}>
        EN
      </span>
    </div>
  )
}
