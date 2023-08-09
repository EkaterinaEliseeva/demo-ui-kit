import React, { ReactNode } from 'react';
import ModalContent from '@/components/Modal/components/ModalContent';

type TRulesElementProps = {
    text: string;
    color: 'bg-blue-blue/5';
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
declare const RuleElement: React.FC<TRulesElementProps>;

type TModalProps = {
    isShown: boolean;
    setIsShown: (isShown: boolean) => void;
    children: ReactNode;
};
declare const Modal: {
    ({ isShown, children, setIsShown }: TModalProps): React.JSX.Element;
    Content: typeof ModalContent;
};

export { Modal, RuleElement, TModalProps, TRulesElementProps };
