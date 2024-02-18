import { FC } from 'react';
import { DialogPropsType } from './types';
import IconClose from '@/components/icons/IconClose';

const Dialog: FC<DialogPropsType> = ({
  children,
  visible = false,
  title,
  handleClose,
}) => {
  return (
    visible && (
      <div className="h-screen w-screen fixed top-0 left-0 z-20">
        <div
          className="bg-black bg-opacity-50 h-screen w-screen fixed"
          onClick={handleClose}
        ></div>
        <div className="h-screen w-screen flex items-end justify-center p-4 text-center sm:items-center sm:p-0 z-30">
          <div className="relative transform overflow-hidden rounded-sm bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {title && (
              <div className="flex items-center px-5 pt-5">
                <div className="font-semibold text-lg">{title}</div>
                <div className="ml-auto">
                  <div className="cursor-pointer" onClick={handleClose}>
                    <IconClose />
                  </div>
                </div>
              </div>
            )}
            <div className="p-5">{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dialog;
