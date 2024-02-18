'use client';
import React, { FC, useState } from 'react';
import cn from 'classnames';
import { ButtonProps } from './types';
import Spinner from '@/components/base/Spinner';

const Button: FC<ButtonProps> = ({
  customClass = '',
  disabled = false,
  id = 'button',
  loading = false,
  type = 'button',
  buttonType = 'primary',
  styleType = 'filled',
  customClassSpinner,
  children,
  onClick,
}) => {
  const classType = () => {
    let styleTypeClass = '';

    switch (styleType) {
      case 'filled':
        switch (buttonType) {
          case 'primary':
            styleTypeClass = 'bg-blue-500 hover:bg-blue-600 !text-white';
            break;
          case 'error':
            styleTypeClass = 'bg-red-500 hover:bg-red-600 !text-white';
            break;
        }
        break;
      case 'outline':
        switch (buttonType) {
          case 'light-filled':
            styleTypeClass =
              '!border !border-base-[#E5E9ED] !text-[#606266]';
            break;
          case 'muted':
            styleTypeClass =
              '!border !border-base-mutedText !text-base-snackbar';
            break;
          default:
            styleTypeClass = `!border !border-${buttonType}-100 !text-${buttonType}-100`;
            break;
        }
        break;
    }

    return `${styleTypeClass}`;
  };
  return (
    <div className="relative">
      {disabled && (
        <div className="disabled-mask cursor-not-allowed absolute w-full h-full z-1 bg-white opacity-40" />
      )}
      <button
        id={id}
        type={type}
        style={{ border: 'inherit', fontWeight: 600 }}
        className={cn({
          'text-white p-4 rounded relative': true,
          [`${classType()}`]: true,
          [`${customClass}`]: customClass,
        })}
        disabled={disabled}
        onClick={onClick}
      >
        {loading ? (
          <Spinner customClass={customClassSpinner} />
        ) : (
          <React.Fragment>{children}</React.Fragment>
        )}
      </button>
    </div>
  );
};

export default Button;
