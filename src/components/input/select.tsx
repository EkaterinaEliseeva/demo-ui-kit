import React, { ReactElement, useRef, useState } from 'react';

import ChevronDownIcon from '@/resources/icons/chevron-down.svg';
import classNames from '@/utils/classNames';
import { selectSize } from './input-styles/input-styles.config';
import { TSelectOption } from './types/TSelectOption';
import useClickOutside from '@/hooks/useClickOutside';

type SelectProps = {
  size: 'sm' | 'md';
  theme?: 'dark' | 'light';
  options: TSelectOption[];
  defaultValue: TSelectOption;
  onSelect: (value: TSelectOption) => void;
};

const Select = ({ options, onSelect, defaultValue, theme = 'light', size }: SelectProps): ReactElement => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<TSelectOption>(defaultValue ?? options[0]);
  const inputRef = useRef<HTMLDivElement>(null);

  useClickOutside(inputRef, () => {
    setShowMenu(false);
  });

  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  const onItemClick = (option: TSelectOption) => {
    setSelectedValue(option);
    onSelect(option);
  };

  return (
    <>
      <div
        ref={inputRef}
        className={classNames(
          'flex select-none items-center cursor-pointer relative transition-all duration-std pl-4 pr-[10px] py-2 border-1-ui rounded-lg text-sm',
          selectSize[size],
          selectedValue.fieldColor ?? '',
          showMenu ? 'ring-3 ring-inset' : '',
          theme === 'light'
            ? 'border-gray ring-gray-ui/35'
            : `hover:bg-gray-ui-100/5 border-gray-ui-100/30 ring-gray-ui-100/25 ${showMenu ? 'bg-gray-ui-100/10' : ''}`
        )}
        onClick={handleInputClick}
      >
        {selectedValue.icon && <span className={'mr-4'}>{selectedValue.icon}</span>}
        <span className={'mr-auto'}>{selectedValue.label}</span>
        {showMenu && (
          <div
            className={classNames(
              'absolute top-full -left-px w-[calc(100%+2px)] border-1-ui rounded-lg text-sm animate-menuShow z-50',
              theme == 'light' ? ' bg-white border-gray ' : 'bg-gray-ui-900 border-gray-ui-100/30'
            )}
          >
            {options.map(option => {
              return (
                <div
                  key={option.label}
                  className={classNames(
                    selectSize[size],
                    option.fieldColor ?? '',
                    'flex items-center transition-all duration-std px-4 py-2',
                    theme == 'light' ? 'hover:bg-gray-ui/10' : 'hover:bg-gray-ui-100/10'
                  )}
                  onClick={() => onItemClick(option)}
                >
                  {option.icon && <span className="mr-4">{option.icon}</span>}
                  {option.label}
                </div>
              );
            })}
          </div>
        )}
        <ChevronDownIcon
          className={classNames(
            'transition-all duration-std',
            showMenu ? ' rotate-180' : '',
            theme == 'dark' ? '[&>path]:stroke-gray-ui-100' : ''
          )}
        />
      </div>
    </>
  );
};

export default Select;
