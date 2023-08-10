import React, { ChangeEventHandler } from 'react';

import TickIcon from '@/resources/icons/tick.svg';
import classNames from '@/utils/classNames';
import { checkboxSizesEnum } from './types/input-styles.enum';
import { checkboxSizes, checkboxThemes, tickIconThemes } from './input-styles/input-styles.config';

type CheckboxProps = {
  disabled?: boolean;
  onChange: ChangeEventHandler;
  theme?: 'dark' | 'light';
  id?: string;
  className?: string;
  size: checkboxSizesEnum;
  checked?: boolean;
};

const Radio = ({ disabled, size, className, id, theme = 'light', checked, onChange }: CheckboxProps) => {
  return (
    <div
      className={classNames(
        checkboxSizes[size],
        'relative flex items-center justify-center',
        disabled ? 'cursor-not-allowed' : ''
      )}
    >
      <input
        type={'radio'}
        className={classNames(
          'h-full w-full absolute',
          className ?? '',
          'opacity-0 peer z-10 disabled:pointer-events-none'
        )}
        disabled={disabled}
        onChange={onChange}
        checked={checked}
        id={id}
      />
      <div
        className={classNames(
          checkboxThemes[theme],
          'transition duration-std w-full h-full border-1-ui border-solid rounded-full peer-checked:border-none peer-focus:ring-3'
        )}
      />
      {size === checkboxSizesEnum.md ? (
        <TickIcon className={classNames('absolute hidden', tickIconThemes[theme], 'peer-checked:block')} />
      ) : (
        <div
          className={classNames(
            'absolute hidden peer-checked:block',
            theme == 'light' ? 'bg-white peer-disabled:bg-gray' : 'bg-gray peer-disabled:bg-gray-ui-100/60',
            'rounded-full w-1 h-1 '
          )}
        ></div>
      )}
    </div>
  );
};

export default Radio;
