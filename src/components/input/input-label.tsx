import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from 'react';

import { inputStyle, inputThemes } from './input-styles/input-styles.config';
import classNames from '@/utils/classNames';

type FormProps = {
  position: 'left' | 'right';
  label: ReactNode;
  placeholder?: string;
  theme?: 'dark' | 'light';
  type: HTMLInputTypeAttribute;
  disabled?: boolean;
  className?: string;
  id?: string;
  onChange: ChangeEventHandler;
};

const InputLabel = ({
  position,
  label,
  id,
  className,
  onChange,
  disabled,
  type,
  theme = 'light',
  placeholder,
}: FormProps) => {
  const errorClass = 'hidden text-10  leading-none absolute bottom-0 text-red-ui';

  return (
    <form className={'relative'} onSubmit={e => e.preventDefault()}>
      <label
        htmlFor={'searchItems'}
        className={classNames('absolute top-[7px]', position === 'left' ? 'left-[10px] ' : 'right-[10px]')}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        className={classNames(
          inputStyle,
          position === 'left' ? 'pl-10 pr-2' : 'pr-14 pl-3',
          'py-2 peer',
          inputThemes[theme],
          className ?? ''
        )}
        disabled={disabled}
        autoComplete="off"
        onChange={onChange}
        id={id}
      />
      <span className={classNames(errorClass, 'peer-invalid:block bottom-[-14px]')}>Error</span>
    </form>
  );
};

export default InputLabel;
