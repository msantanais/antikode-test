import { FC } from "react";
import { DropdownPropsType } from "./types";
import cn from "classnames";

const Dropdown: FC<DropdownPropsType> = ({ children, customClass, id = 'dropdown', visible = false }) => {
  return (
    visible && (
      <div id={id} className={cn({"ring-opacity-5 ring-opacity-5 shadow-lg bg-white rounded-md w-56 mt-2 z-20 absolute -right-[56px]": true, [`${customClass}`]: true})}>
        <div className="py-1" role="none">
          {children}
        </div>
      </div>
    )
  );
};

export default Dropdown;
