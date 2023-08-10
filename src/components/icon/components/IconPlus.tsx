import React from 'react';

import classNames from '@/utils/classNames';
import { TIconProps } from '@/components/icon/types/TIconProps';

export function IconPlus({ className, theme = 'light' }: TIconProps) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center before:absolute before:w-px before:h-4 before:align-middle after:absolute after:w-4 after:h-px',
        theme === 'light' ? 'before:bg-gray-ui after:bg-gray-ui' : 'before:bg-gray-ui-100 after:bg-gray-ui-100',
        className ?? ''
      )}
    />
  );
}
