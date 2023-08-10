import React, { ReactNode } from 'react';
import ModalContent from '@/components/modal/components/ModalContent';
export type TModalProps = {
    isShown: boolean;
    setIsShown: (isShown: boolean) => void;
    children: ReactNode;
};
declare const Modal: {
    ({ isShown, children, setIsShown }: TModalProps): React.JSX.Element;
    Content: typeof ModalContent;
};
export { Modal };
