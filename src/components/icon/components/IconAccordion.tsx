import React from 'react';

import classNames from '@/utils/classNames';
import { TIconProps } from '@/components/icon/types/TIconProps';

export function IconAccordion({ className, theme = 'light' }: TIconProps) {
  return (
    <div
      className={classNames(
        'w-4 h-4 flex relative before:absolute before:h-px before:w-[17px] before:top-2 before:transition-transform before:duration-std after:absolute after:h-px after:w-[17px] after:top-2',
        theme === 'light' ? 'before:bg-gray after:bg-gray' : 'before:bg-gray-100 after:bg-gray-100',
        className ?? ''
      )}
    />
  );
}
