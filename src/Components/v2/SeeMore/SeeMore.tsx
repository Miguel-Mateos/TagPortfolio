interface SeeMoreProps {
  styles?: React.CSSProperties
}

export const SeeMore: React.FC<SeeMoreProps> = ({ styles }) => (
  <div
    style={{ display: 'flex', gap: '72px', alignItems: 'center', ...styles }}
  >
    <div className="separator" />
    <a style={{ whiteSpace: 'nowrap' }}>See more related works</a>
    <div className="separator" />
  </div>
)
