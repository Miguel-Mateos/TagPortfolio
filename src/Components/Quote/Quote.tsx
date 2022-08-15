import './styles.css'

export const Quote = ({ quote }: { quote: string }) => {
  return (
    <div className="subtitle-container">
      <h2>{quote}</h2>
    </div>
  )
}
