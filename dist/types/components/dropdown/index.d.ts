import React, { ReactNode } from 'react';
import DropdownMenuSection from '@/components/dropdown/components/DropdownMenuSection';
type TDropdownProps = {
    theme?: 'dark' | 'light';
    menuPosition: 'top' | 'bottom';
    children: ReactNode;
};
declare const Dropdown: {
    ({ theme, children, menuPosition }: TDropdownProps): React.JSX.Element;
    Section: typeof DropdownMenuSection;
};
export default Dropdown;
