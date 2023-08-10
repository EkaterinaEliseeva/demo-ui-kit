import React, { ChangeEventHandler, ReactElement } from 'react';

import { inputStyle, inputThemes } from './input-styles/input-styles.config';
import classNames from '@/utils/classNames';

type TextareaProps = {
  onChange: ChangeEventHandler;
  placeholder?: string;
  disabled?: boolean;
  theme?: 'light' | 'dark';
};

const Textarea = ({ onChange, placeholder, disabled, theme = 'light' }: TextareaProps): ReactElement => {
  const errorClass = 'hidden text-10 leading-none absolute bottom-0 text-red-ui';

  return (
    <div className="flex relative pb-3">
      <textarea
        className={classNames(inputStyle, 'pl-3 pt-2 h-24 peer', inputThemes[theme])}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      <span className={classNames(errorClass, 'peer-required:peer-invalid:block')}>Error</span>
    </div>
  );
};

export default Textarea;
