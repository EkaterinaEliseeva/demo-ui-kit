import React from 'react';

import classNames from '@/utils/classNames';
import { TIconProps } from '@/components/icon/types/TIconProps';

export function IconMinus({ className, theme = 'light' }: TIconProps) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center after:absolute after:w-4 after:h-px',
        theme === 'light' ? 'after:bg-gray/ui' : 'after:bg-gray/ui-100',
        className ?? ''
      )}
    />
  );
}
