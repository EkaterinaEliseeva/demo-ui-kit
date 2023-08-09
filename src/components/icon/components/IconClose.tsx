import React from 'react';

import classNames from '@/utils/classNames';
import { TIconProps } from '@/components/icon/types/TIconProps';

export function IconClose({ className, theme = 'light' }: TIconProps) {
  return (
    <div
      className={classNames(
        'w-6 h-6 before:absolute before:w-px before:h-6 before:align-middle before:rotate-45 after:absolute after:w-px after:h-6 after:align-middle after:rotate-[-45deg]',
        theme === 'light' ? 'before:bg-gray after:bg-gray' : 'before:bg-gray-100 after:bg-gray-100',
        className ?? ''
      )}
    />
  );
}
