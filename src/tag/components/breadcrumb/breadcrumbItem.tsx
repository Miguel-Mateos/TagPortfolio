import React from 'react'

export interface IBreadcrumbItemProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * Identifies the Breadcrumb item
   */
  id: string
  /**
   * Breadcrumb title to display
   */
  title: string
  /**
   * Breadcrumb link
   */
  href?: string
  [others: string]: any
}

export const BreadcrumbItem: React.FC<IBreadcrumbItemProps> = (props) => {
  const { id, title, href, children, ...rest } = props

  const truncateBreadcrumbTitle = () => {
    return title.length > 30 ? title.substring(0, 30) + '...' : title
  }

  return (
    <a
      href={href || '#'}
      target="_self"
      id={id}
      key={id}
      data-testid={
        rest && rest['data-testid'] ? `${rest['data-testid']}-link` : undefined
      }
      className="breadcrumb-item"
      {...rest}
    >
      {truncateBreadcrumbTitle()}
    </a>
  )
}

export default BreadcrumbItem
