interface SeeMoreProps {
  styles?: React.CSSProperties
  className?: string
}

export const SeeMore: React.FC<SeeMoreProps> = ({ styles, className }) => (
  <div
    style={{ display: 'flex', gap: '72px', alignItems: 'center', ...styles }}
    className={className}
  >
    <div className="separator" />
    <a style={{ whiteSpace: 'nowrap' }}>See more related works</a>
    <div className="separator" />
  </div>
)
