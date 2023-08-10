import React from 'react';

import Button from '@/components/buttons/button';
import OverflowIcon from '@/resources/icons/overflow.svg';
import { buttonSizesEnum, buttonTypesEnum } from '@/components/buttons/types/button-styles.enum';

export type TCardFooterWithDropdownProps = {
  name: string;
};

export default function CardFooterWithDropdown({ name }: TCardFooterWithDropdownProps) {
  return (
    <div className="w-full p-4 flex justify-between items-center">
      <div className="common-text font-semibold">{name}</div>
      <Button size={buttonSizesEnum.xsSquare} type={buttonTypesEnum.noBorder} onClick={() => {}}>
        <OverflowIcon className={'h-4 w-4'} />
      </Button>
    </div>
  );
}
