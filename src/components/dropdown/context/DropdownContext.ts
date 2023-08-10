import { createContext } from 'react';

type TDropdownContext = {
  theme: 'dark' | 'light';
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownContext = createContext<TDropdownContext>({
  theme: 'light',
  setShowMenu: () => {},
});

export default DropdownContext;
