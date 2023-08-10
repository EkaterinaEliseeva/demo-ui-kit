import React, { ChangeEventHandler } from 'react';

import classNames from '@/utils/classNames';
import { toggleStyles } from './input-styles/input-styles.config';

type CheckboxProps = {
  disabled?: boolean;
  onChange: ChangeEventHandler;
  theme?: 'dark' | 'light';
  id?: string;
  className?: string;
  checked?: boolean;
};

const Toggle = ({ disabled, theme = 'light', onChange, id, className, checked }: CheckboxProps) => {
  return (
    <div
      className={classNames('relative flex items-center h-4 w-8 rounded-full', disabled ? 'cursor-not-allowed' : '')}
    >
      <input
        type={'checkbox'}
        className={classNames(
          toggleStyles[theme],
          'h-full w-full absolute',
          className ?? '',
          'appearance-none peer z-10 disabled:pointer-events-none before:w-full before:h-full before:flex before:rounded-full before:-z-10 after:duration-100 after:transition-absolute after:absolute after:bg-gray-100 after:w-[14px] after:h-[14px] after:left-px after:rounded-full checked:after:left-[17px] focus:after:ring-[6px] hover:after:ring-[6px] after:bottom-px'
        )}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        id={id}
      />
    </div>
  );
};

export default Toggle;
