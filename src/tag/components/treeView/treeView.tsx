import React from 'react';
import { TreeViewElement } from './treeViewElement';

interface ITree {
  /**
   * Alternative className for Tree
   */
  className?: string
  [other: string]: any
}

export const TreeWrap: React.FC<ITree> = ({ children, className, ...rest }) => {
  const renderable = React.Children.toArray(children).every((child: any) => (child.type.name === 'TreeViewElement'));
  return renderable ? (
    <div className={className || ''} {...rest}>{children}</div>
  ) : null;
};

export const Tree = {
  Wrap: TreeWrap,
  Element: TreeViewElement
};