import React, { useState, useRef, useContext } from 'react';

import classNames from '@/utils/classNames';
import useClickOutside from '@/hooks/useClickOutside';
import ChevronDownIcon from '@/resources/icons/chevron-down.svg';
import DropdownContext from '@/components/dropdown/context/DropdownContext';
import { TDropdownOption } from '@/components/dropdown/types/TDropdownOption';
import DropdownNestedMenu from '@/components/dropdown/components/DropdownMenu';

export type TDropdownMenuSectionProps = {
  options: TDropdownOption[];
};

export default function DropdownMenuSection({ options }: TDropdownMenuSectionProps) {
  const { theme, setShowMenu } = useContext(DropdownContext);
  const [nestedMenuIndex, setNestedMenuIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    setNestedMenuIndex(null);
  });

  const handleMenuItemClick = (index: number) => {
    const selectedOption = options[index];

    if (selectedOption.callback) {
      selectedOption.callback();
      setShowMenu(false);
      setNestedMenuIndex(null);
    }

    if (selectedOption?.options) {
      if (nestedMenuIndex === index) {
        setNestedMenuIndex(null);
      } else {
        setNestedMenuIndex(index);
      }
    }
  };

  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <div
            className={classNames(
              'transition-all flex items-center cursor-pointer duration-std px-4 py-2',
              theme === 'light' ? 'hover:bg-gray-ui/10' : 'hover:bg-gray-100/10'
            )}
            style={{ color: option.textColor }}
            onClick={() => handleMenuItemClick(index)}
          >
            {!!option.icon && (
              <option.icon
                className={classNames(
                  theme === 'dark' && !option.textColor
                    ? '[&>path]:fill-gray-100 group-disabled:[&>path]:fill-gray-700'
                    : '',
                  'mr-2'
                )}
              />
            )}
            {option.label}
            {option.options && (
              <ChevronDownIcon
                className={classNames(
                  'block ml-auto transition-all',
                  nestedMenuIndex === index ? 'rotate-180' : '',
                  theme === 'dark'
                    ? '[&>path]:fill-transparent [&>path]:stroke-white group-disabled:[&>path]:fill-gray-700'
                    : ''
                )}
              />
            )}
          </div>
          {nestedMenuIndex === index && option.options && <DropdownNestedMenu options={option.options} />}
        </div>
      ))}
    </>
  );
}
