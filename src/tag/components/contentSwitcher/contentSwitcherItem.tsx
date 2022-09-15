import React from 'react';

export interface IContentSwitcherItemProps {
  id: string;
  /**
   * Identify if this tab is selected
   */
  active?: string;
  onClickItem?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icons?: any;
  title: string;
  badge?: number;
  [others: string]: any;
}

export const ContentSwitcherItem: React.FC<IContentSwitcherItemProps> = (props) => {
  const {id, active, children, ...rest} = props;

  return active ? (
    <div
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      id={id}
      key={id}
      className="content-switcher-item-content"
    >
      {children}
    </div>
  ) : (
    <></>
  );
};

export default ContentSwitcherItem;

