import React, {useState} from 'react';
import TabItem from './tabItem';
import Dropdown, {DropdownButton, DropdownMenu} from '../dropdown/dropdown';

export {default as TabItem} from './tabItem';
export interface ITabsProps {
  /**
   * Change horizontal for vertical allignment
   */
  vertical?: boolean;
  /**
   * Indicates the active tab when the component is rendered
   */
  defaultActiveTab?: string;
  className?: string;
  [others: string]: any;
}

export const Tabs: React.FC<ITabsProps> = (props) => {
  const {defaultActiveTab, vertical, children, className, ...rest} = props;
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab ? defaultActiveTab : '');
  const onClickTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const _id = e.currentTarget.id;
    setActiveTab(_id);
  };

  const renderList = () => {
    let _list: any = [];
    let _dropdownMenu: any = [];
    let itemsCollapsed = 0;
    if (children) {
      if (React.Children.toArray(children).length > 1) {
        React.Children.forEach(children, (_child: any, index: number) => {
          if (_child.type === TabItem) {
            if (!_child.props.collapsed && index - itemsCollapsed <= 5) {
              _list.push(
                <button
                  id={_child.props?.id}
                  key={_child.props?.key || `${_child.props?.id}-key`}
                  data-testid={_child.props ? _child.props['data-testid'] : undefined}
                  disabled={_child?.props?.disabled}
                  onClick={onClickTab}
                  className={`tab-list-item ${
                    activeTab === _child.props?.id || (!activeTab && index === 0) ? 'active' : ''
                  }`}
                >
                  {_child.props.title}
                </button>
              );
            } else {
              itemsCollapsed++;
              _dropdownMenu.push(
                <button
                  id={_child.props?.id}
                  key={_child.props?.key || `${_child.props?.id}-key`}
                  data-testid={_child.props ? _child.props['data-testid'] : undefined}
                  disabled={_child?.props?.disabled}
                  onClick={onClickTab}
                  className={`dropdown-item tab-list-item ${
                    activeTab === _child.props?.id || (!activeTab && index === 1) ? 'active' : ''
                  }`}
                >
                  {_child.props.title}
                </button>
              );
            }
          }
        });
      } else {
        const _uniqueChild = children as any;
        if (_uniqueChild.type === TabItem) {
          if (!_uniqueChild.props.collapsed) {
            _list = (
              <button
                id={_uniqueChild.props?.id}
                key={_uniqueChild.props?.key || `${_uniqueChild.props?.id}-key`}
                data-testid={_uniqueChild.props ? _uniqueChild.props['data-testid'] : undefined}
                disabled={_uniqueChild?.props?.disabled}
                onClick={onClickTab}
                className="tab-list-item active"
              >
                {_uniqueChild.props.title}
              </button>
            );
          } else {
            _dropdownMenu = (
              <button
                id={_uniqueChild.props?.id}
                key={_uniqueChild.props?.key || `${_uniqueChild.props?.id}-key`}
                data-testid={_uniqueChild.props ? _uniqueChild.props['data-testid'] : undefined}
                disabled={_uniqueChild?.props?.disabled}
                onClick={onClickTab}
                className="dropdown-item tab-list-item active"
              >
                {_uniqueChild.props.title}
              </button>
            );
          }
        }
        _list = <></>;
      }
    }

    if (_dropdownMenu && _dropdownMenu.length) {
      _list.push(renderDropdown(_dropdownMenu));
    }

    return <div className="tab-list">{_list}</div>;
  };

  const renderDropdown = (menu: any) => {
    const _disabledElements = (menu as any[]).filter((_element: any) => _element.props.disabled);
    const _activeElements = (menu as any[]).filter((_element: any) => {
      const _classes = _element.props.className.split(' ');
      if (_classes[_classes.length - 1] === 'active') return true;
      return false;
    });

    return (
      <Dropdown itemsDivider={!vertical}>
        <DropdownButton disabled={_disabledElements.length === menu.length}>
          <button className={_activeElements.length ? 'active' : ''}>
            <span className="material-icons">more_vert</span>
          </button>
        </DropdownButton>
        <DropdownMenu>{menu}</DropdownMenu>
      </Dropdown>
    );
  };

  const renderContent = () => {
    let _content;
    if (children) {
      if (React.Children.toArray(children).length > 1) {
        _content = React.Children.map(children, (_child: any, index: number) => {
          const _childClone = React.cloneElement(_child, {
            activeTab: activeTab === _child.props?.id || (!activeTab && index === 0),
          });
          return _childClone;
        });
      } else {
        const _uniqueChild = children as any;
        if (_uniqueChild.type === TabItem) {
          const _uniqueChildClone = React.cloneElement(_uniqueChild, {
            activeTab: true,
          });
          _content = _uniqueChildClone;
        }
        _content = <></>;
      }
    }
    return _content;
  };

  return (
    <div className={`${vertical ? 'tabs-vertical' : 'tabs'} ${className || ''}`} {...rest}>
      {renderList()}
      {renderContent()}
    </div>
  );
};

export default Tabs;

