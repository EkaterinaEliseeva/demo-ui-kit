/// <reference types="react" />
type TDropdownContext = {
    theme: 'dark' | 'light';
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const DropdownContext: import("react").Context<TDropdownContext>;
export default DropdownContext;
