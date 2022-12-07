import React, { useEffect, useState } from 'react'
import SidebarButton from './sidebarButton'
import SidebarDivider from './sidebarDivider'
import SidebarLogo from './sidebarLogo'
export { default as SidebarLogo } from './sidebarButton'
export { default as SidebarDivider } from './sidebarDivider'
export { default as SidebarButton } from './sidebarButton'
export interface ISidebarProps {
  /**
   * Identifies the sidebar component
   */
  id?: string
  /**
   * Change mode for sidebar in collapsed mode
   */
  collapsed?: boolean
  /**
   * Set the default item selected, is an id of the sidebar item selected
   */
  defaultItemSelected?: string
  /**
   * Function when item is clicked
   */
  onClickSidebarItem?: (itemId: string) => void
  /**
   * Add class to sidebar
   */
  className?: string
  logo: any
  open?: boolean
  [others: string]: any
}

export const Sidebar: React.FC<ISidebarProps> = (props) => {
  const {
    id,
    collapsed,
    children,
    defaultItemSelected,
    className,
    onClickSidebarItem,
    logo,
    open,
    ...rest
  } = props

  const [isCollapsed] = useState(collapsed)
  const [itemSelected, setItemSelected] = useState(defaultItemSelected)

  useEffect(() => {
    if (defaultItemSelected && defaultItemSelected !== itemSelected)
      setItemSelected(defaultItemSelected)
  }, [defaultItemSelected, itemSelected])

  const renderSidebarLogo = () => {
    let _sidebarLogo = children
      ? (children as any).find((a: any) => a && a.type === SidebarLogo)
      : undefined
    if (_sidebarLogo) {
      _sidebarLogo = React.cloneElement(_sidebarLogo, {
        ..._sidebarLogo.props,
        'data-testid':
          rest && rest['data-testid']
            ? `${rest['data-testid']}-header`
            : undefined
      })
      return _sidebarLogo
    }
    return <></>
  }
  const renderSidebarChilds = () => {
    const _sidebarChilds: any[] = []
    if (children) {
      ;(children as any).forEach((child: any, index: number) => {
        if (child) {
          if (child.type === SidebarDivider) {
            _sidebarChilds.push(
              React.cloneElement(child, {
                ...child.props,
                collapsed: isCollapsed
              })
            )
          } else if (child.type === SidebarButton) {
            if (child.props.dropdown) {
              const _childsDropdown = child.props.children
              const _newChildsDropdown: any[] = []
              let _selected = false
              _childsDropdown?.forEach(
                (_childDropdown: any, _index: number) => {
                  const _childDropdownId = _childDropdown.props.id
                  if (itemSelected === _childDropdownId) _selected = true
                  _newChildsDropdown.push(
                    React.cloneElement(_childDropdown, {
                      ..._childDropdown.props,
                      className: `dropdown-item${
                        itemSelected === _childDropdownId ? '_selected' : ''
                      }`,
                      onClick: onClickItem,
                      'data-testid':
                        rest && rest['data-testid']
                          ? `${rest['data-testid']}-button-${index}-dropdown-${_index}`
                          : undefined
                    })
                  )
                }
              )
              _sidebarChilds.push(
                React.cloneElement(child, {
                  ...child.props,
                  selected: _selected,
                  children: _newChildsDropdown,
                  collapsed: isCollapsed,
                  'data-testid':
                    rest && rest['data-testid']
                      ? `${rest['data-testid']}-button-${index}`
                      : undefined
                })
              )
            } else {
              _sidebarChilds.push(
                React.cloneElement(child, {
                  ...child.props,
                  selected: itemSelected === child.props.id,
                  onClick: onClickItem,
                  collapsed: isCollapsed,
                  'data-testid':
                    rest && rest['data-testid']
                      ? `${rest['data-testid']}-button-${index}`
                      : undefined
                })
              )
            }
          } else if (child.type !== SidebarLogo) {
            _sidebarChilds.push(
              React.cloneElement(child, {
                ...child.props,
                selected: itemSelected === child?.props?.id,
                collapsed: isCollapsed,
                'data-testid':
                  rest && rest['data-testid']
                    ? `${rest['data-testid']}-button-${index}`
                    : undefined
              })
            )
          }
        }
      })
    }
    return _sidebarChilds
  }
  const onClickItem = (e: React.MouseEvent<any>) => {
    const _id = e.currentTarget.id
    setItemSelected(_id)
    if (typeof onClickSidebarItem === 'function') onClickSidebarItem(_id)
  }
  return (
    <div
      id={id}
      data-testid={
        rest && rest['data-testid'] ? rest['data-testid'] : undefined
      }
      className={`sidebar${isCollapsed ? '_collapsed' : ''} ${
        open ? 'open' : ''
      } ${className || ''}`}
    >
      <div className="focuser" />
      {renderSidebarLogo()}
      <button
        data-testid={
          rest && rest['data-testid']
            ? `${rest['data-testid']}-collapsed-btn`
            : undefined
        }
        className="sidebar-collapsed-button logo"
      >
        {logo}
      </button>
      {renderSidebarChilds()}
    </div>
  )
}

export default Sidebar
