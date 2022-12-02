import React from 'react'
import Dropdown, { DropdownButton, DropdownMenu } from '../dropdown/dropdown'
const TRANSITION_CONSTRUCTOR = 'top 0.3s ease-in-out'

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

  const moveSelector = (id: string) => {
    console.log('move selector')
    const selector = document.getElementById(id)
    if (selector) {
      const focuser = document.getElementsByClassName('focuser')
      if (focuser && focuser.length > 0) {
        const focus = focuser[0] as HTMLElement
        focus.style.transition = TRANSITION_CONSTRUCTOR
        focus.style.top = `${selector.offsetTop}px`
      }
    }
  }

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
      title={label}
      key={id}
      data-testid={
        rest && rest['data-testid'] ? rest['data-testid'] : undefined
      }
      className={`sidebar-button${selected ? '_selected' : ''}${
        disabled ? '_disabled' : ''
      } ${className || ''}`}
      href={href}
      onClick={() => {
        props.onPressed()
        moveSelector(id)
      }}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </a>
  )
}

export default SidebarButton
