import React, { ReactNode } from 'react';

type TCardContentProps = {
  children: ReactNode;
};

export default function CardContent({ children }: TCardContentProps) {
  return (
    <div
      className={
        'h-[280px] flex justify-center items-center relative overflow-hidden border-b-1 border-b-gray border-solid'
      }
    >
      {children}
    </div>
  );
}
