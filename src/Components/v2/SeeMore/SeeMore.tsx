interface SeeMoreProps extends React.HTMLProps<HTMLDivElement> {
  styles?: React.CSSProperties
  className?: string
  more?: boolean
  setMore?: () => void
  [key: string]: any
}

export const SeeMore: React.FC<SeeMoreProps> = ({
  styles,
  className,
  more,
  setMore,
  ...rest
}) => (
  <div
    style={{ display: 'flex', gap: '72px', alignItems: 'center', ...styles }}
    className={className}
    {...rest}
  >
    <div className="separator" />
    <a style={{ whiteSpace: 'nowrap' }} onClick={setMore}>
      {more ? 'See less related works' : 'See more related works'}
    </a>
    <div className="separator" />
  </div>
)
