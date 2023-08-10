import React, { ReactNode } from 'react';

import transparentBg from '@/resources/icons/transparent-bg.png';
import TextIcon from '@/resources/icons/text-icon.svg';
import classNames from '@/utils/classNames';

type TCardAttributeContentProps = {
  children?: ReactNode;
};

export default function CardAttributeContent({ children }: TCardAttributeContentProps) {
  return (
    <div
      className={classNames(
        'h-[280px] flex justify-center items-center relative overflow-hidden',
        children ? 'border-b-1 border-b-gray border-solid' : ''
      )}
    >
      {children && (
        <>
          <div
            className="relative z-10 w-full h-full flex justify-center"
            style={{ backgroundImage: `url(${transparentBg})`, backgroundRepeat: 'repeat' }}
          >
            {children}
          </div>
        </>
      )}
      {!children && <TextIcon />}
    </div>
  );
}
