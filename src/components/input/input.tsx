import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import { inputStyle, inputThemes } from './input-styles/input-styles.config';
import classNames from '@/utils/classNames';

type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler;
  theme?: 'dark' | 'light';
  id?: string;
  className?: string;
};

const Input = ({ placeholder, id, className = '', theme = 'light', onChange, disabled, type }: InputProps) => {
  const errorClass = 'hidden text-10 leading-none absolute bottom-0 text-red-ui';

  return (
    <div className="flex relative">
      <input
        placeholder={placeholder}
        type={type}
        className={classNames(inputStyle, 'pl-3 pr-2 py-2 peer', inputThemes[theme], className ?? '')}
        disabled={disabled}
        autoComplete="off"
        onChange={onChange}
        id={id}
      />
      <span className={classNames(errorClass, 'peer-invalid:block bottom-[-14px]')}>Error</span>
    </div>
  );
};

export default Input;
