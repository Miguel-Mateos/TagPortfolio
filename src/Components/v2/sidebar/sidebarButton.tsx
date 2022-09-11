import React from 'react'
import Dropdown, { DropdownButton, DropdownMenu } from 'tag-ds'

export interface ISidebarButtonProps {
  /**
   * Identifies the button in sidebar
   */
  id: string
  /**
   * Set the icon element in sidebar button
   */
  icon: any
  /**
   * Set the label element in sidebar button
   */
  label: string
  /**
   * Set if this element is a dropdown
   */
  dropdown?: boolean
  /**
   * Set the route to redirect when button is clicked
   */
  href?: string
  /**
   * Identifies if sidebar is collapsed or not
   */
  collapsed?: boolean
  /**
   * Set if sidebar button is selected
   */
  selected?: boolean
  /**
   * Set if sidebar button is disabled
   */
  disabled?: boolean
  /**
   * Function when item is clicked
   */
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>
  ) => void
  /**
   * Add class to sidebar button
   */
  className?: string
  [others: string]: any
}

export const SidebarButton: React.FC<ISidebarButtonProps> = (props) => {
  const {
    id,
    icon,
    label,
    dropdown,
    href,
    collapsed,
    selected,
    disabled,
    className,
    onClick,
    children,
    ...rest
  } = props

  return dropdown ? (
    <Dropdown className="sidebar-button_dropdown">
      <DropdownButton>
        <div
          id={id}
          key={id}
          data-testid={
            rest && rest['data-testid'] ? rest['data-testid'] : undefined
          }
          className={`sidebar-button${selected ? '_selected' : ''}${
            disabled ? '_disabled' : ''
          } ${className || ''}`}
          onClick={onClick}
        >
          {icon}
          {!collapsed && label}
        </div>
      </DropdownButton>
      <DropdownMenu>{children}</DropdownMenu>
    </Dropdown>
  ) : (
    <a
      id={id}
      key={id}
      data-testid={
        rest && rest['data-testid'] ? rest['data-testid'] : undefined
      }
      className={`sidebar-button${selected ? '_selected' : ''}${
        disabled ? '_disabled' : ''
      } ${className || ''}`}
      href={href}
      onClick={props.onPressed}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </a>
  )
}

export default SidebarButton
