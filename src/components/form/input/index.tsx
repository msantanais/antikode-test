'use client';
import React, { FC, useState } from 'react';
import cn from 'classnames';
import { InputProps } from './types';

const Input: FC<InputProps> = ({
  inputType = 'floating',
  customMargin,
  inputWidthClasses,
  id = 'input',
  name = 'input',
  inputClasses = '',
  inputGroupClasses = '',
  placeholder = 'Masukan Input',
  label = 'Masukan Input',
  errorMessage = '',
  prefix,
  suffix,
  type = 'text',
  loading = false,
  value = '',
  showErrorMessage = true,
  onChange,
  onBlur,
  onKeyDown,
  formik,
  maxLength,
}) => {
  const classType = () => {
    let typeStyles = '';

    if (inputType === 'floating') typeStyles = 'form-floating';
    else if (inputType === 'inline') typeStyles = '';
    else if (['without-label', 'label-outside'].includes(inputType))
      typeStyles = 'form-normal ';
    else typeStyles = 'form-floating';

    return `${typeStyles}${customMargin ? ' custom-margin' : ''}${
      inputWidthClasses ? ` ${inputWidthClasses}` : ''
    }`;
  };
  const inlineType = () => {
    let typeStyles = '';

    if (inputType === 'inline') typeStyles = 'form-normal form-normal--inline';

    return `${typeStyles}${customMargin ? ' custom-margin' : ''}`;
  };

  const renderInputType = () => {
    let temporaryInputType = '';
    switch (type) {
      case 'text':
      case 'textarea':
        temporaryInputType = type;
        break;
      default:
        break;
    }
    return temporaryInputType;
  };
  return (
    <React.Fragment>
      <div id={id} key={id} className={`${inlineType()}`}>
        <div
          className={cn({
            [`${classType()}`]: true,
            [inputGroupClasses]: true,
            'form-group':
              prefix ||
              suffix ||
              errorMessage ||
              loading ||
              type === 'password',
          })}
        >
          <input
            id={id}
            autoComplete="autoComplete"
            type={renderInputType()}
            name={name}
            placeholder={placeholder}
            className={cn({
              'form-input form-input--large': true,
              [inputClasses]: true,
              'is-error': errorMessage && (formik ? formik.touched[id] : true),
            })}
            maxLength={maxLength}
            value={value}
            onChange={(e) => {
              formik?.setFieldTouched(id, true, true);
              onChange?.(e);
            }}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
          />
          {label && inputType === 'floating' && (
            <span className="label label--large">{label}</span>
          )}
          {suffix && type !== 'password' && (
            <span
              className={cn({
                'form-input-suffix form-input-suffix--large': true,
              })}
            >
              {suffix}
            </span>
          )}
          {errorMessage &&
            showErrorMessage &&
            (formik ? formik.touched[id] : true) && (
              <div
                className={cn({
                  'form-label': true,
                  'form-label--error': errorMessage,
                })}
              >
                {errorMessage}
              </div>
            )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Input;
