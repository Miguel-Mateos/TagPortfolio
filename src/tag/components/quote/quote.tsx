import React from 'react';

export interface IQuote {
  quote: string;

  /**
   * For setting the Avatar info
   */
  avatar?: {
    img?: string;
    title?: string;
    subtitle?: string;
  };
  /**
   * Additional styling if needed
   */
  className?: string;
  [others: string]: any;
}

export const Quote: React.FC<IQuote> = (props) => {
  const {avatar, className, ...rest} = props;

  const content = (
    <div className={`tag-ds quote-wrapper ${className || ''}`} {...rest}>
      <span className="material-icons quote-icon">format_quote</span>
      <div className="quote">{props.quote}</div>
      {avatar && (
        <div className={'avatar-wrapper'}>
          {avatar.img && <img src={avatar.img} alt="avatar icon" className="avatar_xsmall" />}
          <div className="avatar-text-wrapper">
            {avatar.title && <span className="avatar-title">{avatar.title}</span>}
            {avatar.subtitle && <span className="avatar-subtitle">{avatar.subtitle}</span>}
          </div>
        </div>
      )}
    </div>
  );
  return content;
};

export default Quote;
