interface SeeMoreProps extends React.HTMLProps<HTMLDivElement> {
  styles?: React.CSSProperties
  className?: string
  [key: string]: any
}

export const SeeMore: React.FC<SeeMoreProps> = ({
  styles,
  className,
  ...rest
}) => (
  <div
    style={{ display: 'flex', gap: '72px', alignItems: 'center', ...styles }}
    className={className}
    {...rest}
  >
    <div className="separator" />
    <a style={{ whiteSpace: 'nowrap' }}>See more related works</a>
    <div className="separator" />
  </div>
)
