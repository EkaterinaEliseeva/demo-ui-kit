import React, { useContext } from 'react';

import classNames from '@/utils/classNames';
import DropdownContext from '@/components/dropdown/context/DropdownContext';
import { TDropdownOption } from '@/components/dropdown/types/TDropdownOption';
import DropdownMenuSection from '@/components/dropdown/components/DropdownMenuSection';

export type TDropdownMenuProps = {
  options: TDropdownOption[];
};

export default function DropdownMenu({ options }: TDropdownMenuProps) {
  const { theme } = useContext(DropdownContext);

  return (
    <div
      className={classNames(
        '-left-px pt-2 absolute z-10 rounded-lg w-[calc(100%+2px)] border-solid  border-1-ui',
        theme === 'light' ? 'bg-gray-ui-100 border-gray' : 'bg-gray border-gray-ui/5c'
      )}
    >
      <DropdownMenuSection options={options} />
    </div>
  );
}
