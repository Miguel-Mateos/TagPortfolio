import React from 'react';
import Dropdown, {DropdownButton, DropdownMenu} from '../dropdown/dropdown';
import Notification, {NotificationBody, NotificationFooter, NotificationHeader} from '../notification/notification';
import {OverflowMenu} from '../overflowMenu/overflowMenu';
type NotificationType = 'error' | 'info' | 'read' | 'warning';

export interface INotification {
  header: string;
  body: string;
  footer?: React.ReactElement;
  type: NotificationType;
  show?: boolean;
  created?: Date;
  icon?: any;
}

interface IUpperMenu {
  /**
   * For setting the Avatar info
   */
  avatar: {
    img: string | any;
    title: string;
    subtitle?: string;
  };
  /**
   * Title of the Upper Menu
   */
  title?: string;
  /**
   * Notification List containing header, body, footer, type, show and created and actions in the overflow menu of notifications
   */
  notifications?: {
    setShowItems: () => void;
    onAction?: () => void;
    action?: string;
    emptyMessage?: any;
    title: string;
    items: INotification[];
    showItems: boolean;
  };
  /**
   * Options of the Upper Menu
   */
  options?: {name: string; onClick: () => void}[];
  className?: string;
  [others: string]: any;
}

export const UpperMenu: React.FC<IUpperMenu> = (props: IUpperMenu) => {
  const {avatar, title, notifications, options, className, ...rest} = props;

  const notificationType = (type: NotificationType) => {
    if (type === 'error') return {error: true};
    if (type === 'info') return {info: true};
    if (type === 'read') return {read: true};
    if (type === 'warning') return {warning: true};
  };

  return (
    <div
      className={`upper-menu ${className || ''}`}
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
    >
      {title && (
        <div
          className="upper-menu_left"
          data-testid={rest && rest['data-testid'] ? rest['data-testid'] + '-title' : undefined}
        >
          {title}
        </div>
      )}
      <div className="upper-menu_right">
        {notifications && (
          <div className="upper-menu-notifications">
            <button
              className="upper-menu-icon"
              onClick={notifications.setShowItems}
              data-testid={rest && rest['data-testid'] ? rest['data-testid'] + '-notif-icon' : undefined}
            >
              {notifications.items.length > 0 && <div className="badge_small">{notifications.items.length}</div>}
              <span className="material-icons">notifications</span>
            </button>

            {notifications.showItems && (
              <OverflowMenu
                className="upper-menu-overflow"
                title={notifications.title}
                onClose={notifications.setShowItems}
                action={notifications.action}
                onAction={notifications.onAction}
              >
                {notifications.items.length > 0
                  ? notifications.items.map((_not: INotification, idx) => (
                      <Notification
                        {...notificationType(_not.type)}
                        className="upper-menu-overflow-notification"
                        show={_not.show ?? true}
                        key={`upper-menu-notification-${idx}`}
                        icon={_not.icon}
                      >
                        {_not.header && (
                          <NotificationHeader>
                            {_not.header}
                            {_not.created && <span className="notification-center-text">{_not.created.getSeconds()}s</span>}
                          </NotificationHeader>
                        )}
                        {_not.body && <NotificationBody>{_not.body}</NotificationBody>}
                        {_not.footer && <NotificationFooter>{_not.footer}</NotificationFooter>}
                      </Notification>
                    ))
                  : notifications.emptyMessage}
              </OverflowMenu>
            )}
          </div>
        )}
        <div className="avatar-wrapper">
          {typeof avatar.img === 'string' ? (
            <img src={avatar.img} alt="avatar icon" className="avatar_xsmall" />
          ) : (
            avatar.img
          )}
          <div className="avatar-text-wrapper">
            <span className="avatar-title">{avatar.title}</span>
            {avatar.subtitle && <span className="avatar-subtitle">{avatar.subtitle}</span>}
          </div>
        </div>

        {options && options.length > 0 && (
          <Dropdown className="upper-menu-dropdown">
            <DropdownButton>
              <button
                className="upper-menu-info"
                data-testid={rest && rest['data-testid'] ? rest['data-testid'] + '-more-info' : undefined}
              >
                <span className="material-icons">more_vert</span>
              </button>
            </DropdownButton>
            <DropdownMenu>
              {options.map(({name, onClick}, idx) => (
                <li className="dropdown-item" onClick={onClick} key={idx + '-upper-menu-dropdown'}>
                  {name}
                </li>
              ))}
            </DropdownMenu>
          </Dropdown>
        )}
      </div>
    </div>
  );
};
export default UpperMenu;

