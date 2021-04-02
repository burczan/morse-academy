import React, { forwardRef } from 'react';
import cx from 'classnames';
import { Label } from '../Label';
import { Help } from '../Help';

type TextareaProps = {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  htmlFor?: string;
  placeholder?: string;
  width?: number;
  required?: boolean;
  label?: string;
  disabled?: boolean;
  horizontal?: boolean;
  helperText?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  value,
  onChange,
  name,
  htmlFor,
  placeholder = '',
  width = undefined,
  required = false,
  label = undefined,
  disabled = false,
  horizontal = false,
  helperText = undefined,
}: TextareaProps, ref) => {
  const input = (
    <div
      className={cx('control')}
      style={width ? { width: `${width}%` } : undefined}
    >
      <textarea
        id={htmlFor}
        name={name}
        ref={ref}
        className="textarea"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      {helperText && <Help color="is-danger">{helperText}</Help>}
    </div>
  );

  return (
    <div className={cx('field', { 'is-horizontal': horizontal })}>
      {label && (<Label htmlFor={htmlFor} horizontal={horizontal}>{label}</Label>)}
      {horizontal
        ? (
          <div className="field-body">
            <div className="field">
              {input}
            </div>
          </div>
        )
        : (
          <>
            {input}
          </>
        )}
    </div>
  );
});
