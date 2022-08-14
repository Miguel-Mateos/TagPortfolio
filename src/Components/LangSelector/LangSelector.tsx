import { useAppContext } from '../../Context/ContextApi'

// Choose how to retrieve languages (from database or from static array)
const LANGUAGES = [
  {
    id: 'EN',
    long: 'es-ES'
  },
  {
    id: 'ES',
    long: 'en-US'
  }
]

export const LangSelector = () => {
  const { changeLanguage } = useAppContext() as any
  return (
    <div className="language title">
      {LANGUAGES.map((lang) => (
        <span
          key={lang.id + lang.long}
          className="language-name"
          onClick={() => changeLanguage(lang.long)}
        >
          {lang.id}
        </span>
      ))}
    </div>
  )
}
