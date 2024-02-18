import { FC, MouseEventHandler } from 'react';
import { DropdownMenuPropsType } from './types';
import cn from 'classnames';

const DropdownMenu: FC<DropdownMenuPropsType> = ({
  id,
  key,
  children,
  customClass,
  handleClick,
}) => {
  return (
    <div
      className={cn({
        'block px-4 py-2 text-sm text-gray-700': true,
        [`${customClass}`]: true,
      })}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default DropdownMenu