import React, { useRef, useState, ReactNode } from 'react';

import classNames from '@/utils/classNames';
import Button from '@/components/buttons/button';
import useClickOutside from '@/hooks/useClickOutside';
import OverflowIcon from '@/resources/icons/overflow.svg';
import DropdownContext from '@/components/dropdown/context/DropdownContext';
import DropdownMenuSection from '@/components/dropdown/components/DropdownMenuSection';
import { buttonSizesEnum, buttonTypesEnum } from '@/components/buttons/types/button-styles.enum';

export type TDropdownProps = {
  theme?: 'dark' | 'light';
  menuPosition: 'top' | 'bottom';
  children: ReactNode;
};

const Dropdown = ({ theme = 'light', children, menuPosition }: TDropdownProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useClickOutside(menuRef, () => {
    setShowMenu(false);
  });

  return (
    <div className="relative">
      <Button
        size={buttonSizesEnum.xsSquare}
        type={buttonTypesEnum.noBorder}
        onClick={handleButtonClick}
        className="flex justify-center ml-auto "
      >
        <OverflowIcon
          className={classNames(
            'h-4 w-4',
            theme === 'dark' ? '[&>path]:fill-gray-100 group-disabled:[&>path]:fill-gray-700' : ''
          )}
        />
      </Button>
      {showMenu && (
        <div
          ref={menuRef}
          className={classNames(
            'absolute -right-1.5 border-1-ui w-full py-2 rounded-lg text-sm animate-menuShow z-50 max-w-[180px]',
            theme === 'light' ? 'bg-gray-100 border-gray' : 'bg-gray border-gray-100/30'
          )}
          style={{ [menuPosition === 'top' ? 'bottom' : 'top']: '29px' }}
        >
          <DropdownContext.Provider
            value={{
              theme,
              setShowMenu,
            }}
          >
            {children}
          </DropdownContext.Provider>
        </div>
      )}
    </div>
  );
};

Dropdown.Section = DropdownMenuSection;

export default Dropdown;
