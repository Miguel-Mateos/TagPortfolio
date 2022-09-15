import React from 'react';
import AvatarImg from './avatarImg';

export {default as AvatarImg} from './avatarImg';

export enum AvatarSize {
  small = 'small',
  xsmall = 'xsmall',
  big = 'big',
}

export interface IAvatarProps {
  /**
   * Title of avatar image
   */
  title?: string;
  /**
   * Subtitle of avatar image
   */
  subtitle?: string;

  /**
   * Set the xsmall size
   */
  xsmall?: boolean;
  /**
   * Set the small size
   */
  small?: boolean;
  /**
   * Set the big size
   */
  big?: boolean;

  /**
   * Set if Avatar is disabled
   */
  disabled?: boolean;
  /**
   * Function that will ocurred when user click on avatar image
   */
  onClick?: () => void;
  /**
   * Additional or alternative styling
   */
  className?: string;
  /**
   * Image, icon or any HTML element that will rendered as avatar image
   */
  children: React.ReactElement<typeof AvatarImg>;
  [others: string]: any;
}

export const Avatar: React.FC<IAvatarProps> = (props) => {
  const {xsmall, small, big, disabled, title, subtitle, className, children, onClick, ...rest} = props;

  const getSize = () => {
    if (xsmall) {
      return AvatarSize.xsmall;
    }
    if (small) {
      return AvatarSize.small;
    }
    if (big) {
      return AvatarSize.big;
    }
    return undefined;
  };

  const renderAvatar = () => {
    let avatarImg;
    React.Children.toArray(children).forEach((child: any) => {
      if (child.type === AvatarImg)
        avatarImg = React.cloneElement(child, {...child.props, size: getSize(), onClick: onClick});
    });
    if (title) {
      if (subtitle) {
        return (
          <>
            {avatarImg}
            <div className="avatar-text-wrapper">
              <span className="avatar-title">{title}</span>
              <span className="avatar-subtitle">{subtitle}</span>
            </div>
          </>
        );
      }
      return (
        <>
          {avatarImg}
          <span className="avatar-title">{title}</span>
        </>
      );
    }

    return avatarImg;
  };

  return (
    <div className={`avatar-wrapper${disabled ? '_disabled' : ''} ${className || ''}`} {...rest}>
      {renderAvatar()}
    </div>
  );
};

export default Avatar;

