import './index.css'
interface SeeMoreProps extends React.HTMLProps<HTMLDivElement> {
  styles?: React.CSSProperties
  className?: string
  more?: boolean
  setMore?: () => void
  [key: string]: any
}

export const SeeMore: React.FC<SeeMoreProps> = ({
  styles,
  className = '',
  more,
  setMore,
  ...rest
}) => (
  <div style={{ ...styles }} className={`seemore ${className}`} {...rest}>
    <div className="separator" />
    <a style={{ whiteSpace: 'nowrap' }} onClick={setMore} href="#">
      {more ? 'See less related works' : 'See more related works'}
    </a>
    <div className="separator" />
  </div>
)
