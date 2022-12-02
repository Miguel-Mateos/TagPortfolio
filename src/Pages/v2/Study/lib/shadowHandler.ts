const BOX_SHADOW_CONSTRUCTOR = '4px 8px 16px rgba(28, 48, 75, 0.08)'

export const shadowHandler = ({
  isScrolling,
  layoutWidth,
  studyRightRef
}: {
  isScrolling: any
  layoutWidth: string
  studyRightRef: React.MutableRefObject<HTMLElement | null>
}) => {
  window.clearTimeout(isScrolling)
  if (
    layoutWidth === 'desktop' &&
    studyRightRef.current &&
    Boolean(studyRightRef.current.style.boxShadow) === false
  ) {
    studyRightRef.current.style.boxShadow = BOX_SHADOW_CONSTRUCTOR
  }
  isScrolling = setTimeout(() => {
    studyRightRef.current!.style.boxShadow = ''
  }, 500)
}
