'use client';
import React, { FC, useState } from 'react';
import cn from 'classnames';
import { ButtonProps } from './types';
import Spinner from '@/components/base/spinner';

const Button: FC<ButtonProps> = ({
  customClass = '',
  disabled = false,
  id = 'button',
  loading = false,
  type = 'button',
  customClassSpinner,
  children,
  onClick,
}) => {
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
          'bg-blue-600 hover:bg-blue-700 text-white p-4 rounded relative': true,
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
