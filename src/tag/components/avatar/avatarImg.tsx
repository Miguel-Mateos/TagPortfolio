import React from 'react';
import {AvatarSize} from './avatar';

interface IAvatarImg {
  /**
   * Text that represented as badge in avatar image
   */
  badge?: number | string;
  size?: string;
  /**
   * Additional or alternative styling
   */
  className?: string;

  [others: string]: any;
}

export const AvatarImg: React.FC<IAvatarImg> = (props) => {
  const {children, badge, size, className, ...rest} = props;

  const renderAvatar = () => {
    if (children) {
      const _child = children as any;
      let _childClone;
      const _sizeStr = size ? `_${size}` : '';
      if (rest && typeof rest.onClick === 'function') {
        _childClone = React.cloneElement(_child, {
          ..._child.props,
          className: `avatar-content ${_child.props.className || ''}`,
        });
        return (
          <button className={`avatar${_sizeStr} ${className || ''}`} onClick={rest.onClick}>
            {_childClone}
          </button>
        );
      }
      return React.cloneElement(_child, {
        ..._child.props,
        className: `avatar${_sizeStr} ${className || ''} ${_child.props.className || ''}`,
      });
    }
  };

  return (
    <div className="avatar-container">
      {renderAvatar()}
      {badge && (size === AvatarSize.xsmall ? <span className="badge_empty" /> : <span className="badge">{badge}</span>)}
    </div>
  );
};

export default AvatarImg;

