import React, {useState} from 'react';
import BreadcrumbItem from './breadcrumbItem';
import Dropdown, {DropdownButton, DropdownMenu} from '../dropdown/dropdown';

export {default as BreadcrumbItem} from './breadcrumbItem';
export interface IBreadcrumbProps {
  defaultActiveBreadcrumb?: string;
  className?: string;
  [others: string]: any;
}

export const Breadcrumb: React.FC<IBreadcrumbProps> = (props) => {
  const {defaultActiveBreadcrumb, className, children, ...rest} = props;
  const [activeBreadcrumb, setActiveBreadcrumb] = useState<string>(defaultActiveBreadcrumb ? defaultActiveBreadcrumb : '');

  const onClickBreadcrumb = (e: React.MouseEvent<HTMLDivElement>) => {
    const _id = e.currentTarget.id;
    setActiveBreadcrumb(_id);
  };

  const renderDropdown = (menu: any) => {
    const _disabledElements = (menu as any[]).filter((_element: any) => _element.props.disabled);
    const _activeElements = (menu as any[]).filter((_element: any) => {
      const _classes = _element.props.className.split(' ');
      if (_classes[_classes.length - 1] === 'active') return true;
      return false;
    });
    return (
      <Dropdown className={'breadcrumb-menu-container'} key={0}>
        <DropdownButton disabled={_disabledElements.length === menu.length}>
          <span className={_activeElements.length ? 'active' : ''} />
          <span className="material-icons breadcrumb-dots">more_horiz</span>
        </DropdownButton>
        <DropdownMenu className={'breadcrumb-menu-content'}>
          <li>{menu}</li>
        </DropdownMenu>
      </Dropdown>
    );
  };

  const renderList = () => {
    let breadcrumbList: any = [];
    const _dropdownMenu: any = [];
    let itemsCollapsed = 0;

    if (children) {
      const _children = React.Children.toArray(children);
      if (_children.length > 1) {
        _children.forEach((_child: any, index: number) => {
          const lastItem = (item: any) => item.id !== _child.props.id;
          if (
            (_children.length <= 4 && index < React.Children.toArray(children).length - 1) ||
            (index - itemsCollapsed <= 3 &&
              breadcrumbList.findIndex(lastItem) &&
              index < React.Children.toArray(children).length - 1)
          ) {
            breadcrumbList.push(
              <>
                <div
                  id={_child.props?.title}
                  key={index}
                  data-testid={_child.props && _child.props['data-testid'] ? `${_child.props['data-testid']}` : undefined}
                  onClick={onClickBreadcrumb}
                  className={`breadcrumb-item ${
                    index === React.Children.toArray(children).length - 1 && 'breadcrumb-current'
                  }`}
                >
                  {_child}
                </div>
                <span key={`separator-${index}`} className="material-icons breadcrumb-separator">
                  chevron_right
                </span>
              </>
            );
          } else if (index < React.Children.toArray(children).length - 1 && _children.length >= 4) {
            itemsCollapsed++;
            _dropdownMenu.push(
              <div
                id={_child.props?.title}
                key={index}
                data-testid={_child.props && _child.props['data-testid'] ? `${_child.props['data-testid']}` : undefined}
                onClick={() => onClickBreadcrumb}
                className={`tag-ds dropdown-item tab-list-item ${
                  activeBreadcrumb === _child.props?.id ||
                  (!activeBreadcrumb && index === React.Children.toArray(children).length - 1 && 'breadcrumb-active')
                }`}
              >
                {_child}
              </div>
            );
          } else if (_dropdownMenu && _dropdownMenu.length) {
            breadcrumbList.push(renderDropdown(_dropdownMenu));
            breadcrumbList.push(
              <span key={`separator-${index}`} className="material-icons breadcrumb-separator">
                chevron_right
              </span>
            );
          }
          if (index === React.Children.toArray(children).length - 1 || breadcrumbList.findIndex(lastItem)) {
            breadcrumbList.push(
              <div
                id={_child.props?.title}
                key={index}
                data-testid={_child.props && _child.props['data-testid'] ? `${_child.props['data-testid']}` : undefined}
                onClick={onClickBreadcrumb}
                className={`breadcrumb-item ${
                  index === React.Children.toArray(children).length - 1 && 'breadcrumb-current'
                }`}
              >
                {_child}
              </div>
            );
          }
        });
      } else {
        const _uniqueChild = children as any;
        if (_uniqueChild.type === BreadcrumbItem) {
          breadcrumbList = (
            <div
              id={_uniqueChild.props?.title}
              data-testid={
                _uniqueChild.props && _uniqueChild.props['data-testid'] ? `${_uniqueChild.props['data-testid']}` : undefined
              }
              onClick={() => onClickBreadcrumb}
              className="breadcrumb-item breadcrumb-current"
            >
              {_uniqueChild}
            </div>
          );
        }
      }
    }

    return (
      <div className={`breadcrumb-container ${className || ''}`} {...rest}>
        {breadcrumbList}
      </div>
    );
  };

  return renderList();
};

export default Breadcrumb;

