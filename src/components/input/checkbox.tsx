import React, { ChangeEventHandler } from 'react';

import TickIcon from '@/resources/icons/tick.svg';
import classNames from '@/utils/classNames';
import { checkboxSizesEnum } from './types/input-styles.enum';
import { checkboxSizes, checkboxThemes, tickIconThemes } from './input-styles/input-styles.config';

type CheckboxProps = {
  onChange: ChangeEventHandler;
  theme?: 'dark' | 'light';
  id?: string;
  className?: string;
  size: checkboxSizesEnum;
  checked?: boolean;
  disabled?: boolean;
};

const Checkbox = ({ disabled, className, id, size, theme = 'light', checked, onChange }: CheckboxProps) => {
  return (
    <div
      className={classNames(
        checkboxSizes[size],
        'relative flex items-center justify-center',
        disabled ? 'cursor-not-allowed' : ''
      )}
    >
      <input
        type={'checkbox'}
        className={classNames(
          'h-full w-full absolute opacity-0 peer z-10 disabled:pointer-events-none',
          className ?? ''
        )}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        id={id}
      />
      <div
        className={classNames(
          checkboxThemes[theme],
          'transition duration-std w-full h-full border-1-ui border-solid peer-checked:border-none rounded-lg peer-focus:ring-3'
        )}
      />
      <TickIcon className={classNames('absolute hidden peer-checked:block', tickIconThemes[theme])} />
    </div>
  );
};

export default Checkbox;
