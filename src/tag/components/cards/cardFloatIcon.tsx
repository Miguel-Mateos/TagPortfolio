import React from 'react';
export interface ICardFloatIconProps {
  /**
   * Identifies the accordion item
   */
  id?: string;
  /**
   * Add class to accordion
   */
  className?: string;
  [others: string]: any;
}

export const CardFloatIcon: React.FC<ICardFloatIconProps> = (props) => {
  const {id, children, className, ...rest} = props;

  const renderFloatIcon = () => {
    if (children) {
      const _child: any = React.Children.toArray(children)[0];
      let _renderChild: any;
      if (_child)
        _renderChild = React.cloneElement(_child, {
          ..._child?.props,
          id: id,
          className: `card-float-icon ${_child?.props?.className} ${className}`,
          ...rest,
        });
      return _renderChild;
    }

    return <></>;
  };

  return renderFloatIcon();
};

export default CardFloatIcon;

