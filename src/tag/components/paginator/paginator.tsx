import React, {useState} from 'react';
import Select, {Option} from '../select/select';

export interface IPaginator {
  /**
   * Number of pages existing
   */
  pages: number;
  /**
   * First page to be shown
   */
  defaultPage?: number;
  /**
   * Selector for the collapsed Variant
   */
  collapsed?: boolean;
  className?: string;
  /**
   * For truncating the default Paginator
   */
  truncate?: 'left' | 'right' | 'all';
  /**
   * In case of having collapsed variant,
   * options for inserting the jump element on different positions
   */
  collapsedOptions?: {
    jump?: 'right' | 'left' | 'all';
  };
  disabled?: boolean;
  onChangePage?: (page: number) => void;
  [key: string]: any;
}

export const Paginator: React.FC<IPaginator> = ({
  pages,
  defaultPage,
  collapsed = false,
  collapsedOptions,
  disabled = false,
  truncate,
  className,
  onChangePage,
  ...rest
}) => {
  const [current, setCurrent] = useState<number>(defaultPage || 1);
  const arr = Array.from({length: pages}, (_, idx) => idx + 1);
  const setTruncation = () => {
    if (truncate === 'left') return arr.slice(1, 6);
    if (truncate === 'right') return arr.slice(0, 5);
    return arr.slice(0, 5);
  };

  const [chunk, setChunk] = useState<number[]>(arr.length > 6 ? setTruncation : arr);

  const handleChunkIncrement = () => {
    if (truncate === 'right') {
      const newArr = arr.slice(chunk[chunk.length - 2], chunk[chunk.length - 2] + 5);
      if (newArr[newArr.length - 1] === arr[arr.length - 1])
        setChunk(arr.slice(chunk[chunk.length - 2], arr[arr.length - 2]));
    }
    setChunk(arr.slice(chunk[chunk.length - 2], chunk[chunk.length - 2] + 5));
  };

  const handleChunkDecrement = () => {
    if (chunk[0] !== arr[1]) setChunk(arr.slice(chunk[0] - 5, chunk[0]));
  };

  const onChange = (page: number) => {
    setCurrent(page);
    if (page === arr[0]) {
      setChunk(arr.slice(0, 5));
    } else if (page === arr[arr.length - 1]) {
      setChunk(arr.slice(arr.length - 5, arr.length));
    }
    if (typeof onChangePage === 'function') onChangePage(page);
  };

  if (collapsed) {
    return (
      <div
        className={`paginator-collapsed ${className || ''}`}
        data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
      >
        {(collapsedOptions?.jump === 'left' || collapsedOptions?.jump === 'all') && (
          <button
            disabled={disabled}
            className={`paginator-icon ${current === arr[0] ? 'disabled' : ''}`}
            data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-button-jump-previous` : ''}
            onClick={() => onChange(arr[0])}
          >
            <span className="material-icons">first_page</span>
          </button>
        )}
        {arr.length !== 0 && (
          <button
            disabled={disabled}
            className={`paginator-icon ${current === arr[0] ? 'disabled' : ''}`}
            data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-button-previous` : ''}
            onClick={() => current !== arr[0] && onChange(current - 1)}
          >
            <span className="material-icons">navigate_before</span>
          </button>
        )}
        <Select
          disabled={disabled}
          name="paginator-selector"
          placeholder={defaultPage?.toString() || '1'}
          className="paginator-collapsed-dropdown"
          value={current}
          data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-dropdown` : ''}
          onChange={onChange}
        >
          {arr &&
            arr.length > 0 &&
            arr.map((num) => (
              <Option
                key={num + 'select-item'}
                value={num}
                label={num.toString()}
                data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-dropdown-item-${num}` : ''}
              >
                {num}
              </Option>
            ))}
        </Select>
        <span>of {arr.length} pages</span>
        {arr.length !== 0 && (
          <button
            disabled={disabled}
            className={`paginator-icon ${current === arr[arr.length - 1] ? 'disabled' : ''}`}
            data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-button-next` : ''}
            onClick={() => current !== arr[arr.length - 1] && onChange(current + 1)}
          >
            <span className="material-icons">navigate_next</span>
          </button>
        )}
        {(collapsedOptions?.jump === 'right' || collapsedOptions?.jump === 'all') && (
          <button
            disabled={disabled}
            className={`paginator-icon ${current === arr[arr.length - 1] ? 'disabled' : ''}`}
            data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-button-jump-next` : ''}
            onClick={() => onChange(arr[arr.length - 1])}
          >
            <span className="material-icons">last_page</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`paginator ${className || ''}`}
      data-testid={rest && rest['data-testid'] ? rest['data-testid'] : undefined}
    >
      {arr.length > 6 && (
        <button
          disabled={disabled}
          className={`paginator-icon ${chunk[0] === arr[1] || chunk[0] === arr[0] ? 'disabled' : ''}`}
          onClick={handleChunkDecrement}
          data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-button-previous` : ''}
        >
          <span className="material-icons">navigate_before</span>
        </button>
      )}
      {(truncate === 'left' || truncate === 'all') && chunk[0] > arr[3] && (
        <>
          <button
            className={current === arr[0] ? 'paginator-page_active' : 'paginator-page'}
            data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-truncate-left` : ''}
            onClick={() => onChange(arr[0])}
          >
            {arr[0]}
          </button>
          <span className="paginator-truncate">...</span>
        </>
      )}
      {chunk.map((_num) => (
        <button
          disabled={disabled}
          className={current === _num ? 'paginator-page_active' : 'paginator-page'}
          onClick={() => onChange(_num)}
          key={_num + 'paginator-num-page'}
        >
          {_num}
        </button>
      ))}
      {(truncate === 'right' || truncate === 'all') && chunk[chunk.length - 1] < arr[arr.length - 3] && (
        <>
          <span className="paginator-truncate">...</span>
          <button
            disabled={disabled}
            className={current === arr[arr.length - 1] ? 'paginator-page_active' : 'paginator-page'}
            data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-truncate-right` : ''}
            onClick={() => onChange(arr[arr.length - 1])}
          >
            {arr[arr.length - 1]}
          </button>
        </>
      )}
      {arr.length > 6 && (
        <button
          disabled={disabled}
          className={`paginator-icon ${chunk[chunk.length - 1] === arr[arr.length - 1] ? 'disabled' : ''}`}
          onClick={handleChunkIncrement}
          data-testid={rest && rest['data-testid'] ? `${rest['data-testid']}-button-next` : ''}
        >
          <span className="material-icons">navigate_next</span>
        </button>
      )}
    </div>
  );
};
