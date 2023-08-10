import React, { ReactNode, ReactElement } from 'react';

type TRulesElementProps = {
    text: string;
    color: string;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};
declare const Rule: React.FC<TRulesElementProps>;

type TModalContentProps = {
    children: ReactElement;
    className: string;
};
declare function ModalContent({ children, className }: TModalContentProps): React.JSX.Element;

type TModalProps = {
    isShown: boolean;
    setIsShown: (isShown: boolean) => void;
    children: ReactNode;
};
declare const Modal: {
    ({ isShown, children, setIsShown }: TModalProps): React.JSX.Element;
    Content: typeof ModalContent;
};

type TAccordionItemProps = {
    children: ReactNode;
    title: ReactNode;
    details?: string;
    opened?: boolean;
};
declare function AccordionItem({ children, title, details, opened }: TAccordionItemProps): React.JSX.Element;

type TAccordionProps = {
    children: ReactElement[];
    className?: string;
};
declare function Accordion({ children, className }: TAccordionProps): React.JSX.Element;
declare namespace Accordion {
    var Item: typeof AccordionItem;
}

type TIconProps = {
    className?: string;
    theme?: 'light' | 'dark';
};

declare function IconAccordion({ className, theme }: TIconProps): React.JSX.Element;

declare function IconClose({ className, theme }: TIconProps): React.JSX.Element;

declare function IconMinus({ className, theme }: TIconProps): React.JSX.Element;

declare function IconPlus({ className, theme }: TIconProps): React.JSX.Element;

type TCardsGridProps = {
    children: ReactNode;
    cardsWidth: number;
    gap: number;
};

type TContainerProps = {
    children: ReactElement;
    className: string;
};

type TDropdownProps = {
    theme?: 'dark' | 'light';
    menuPosition: 'top' | 'bottom';
    children: ReactNode;
};

type TTabDataElement = {
    title: string;
};

type TTabsProps = {
    tabsData: TTabDataElement[];
};

export { Accordion, IconAccordion, IconClose, IconMinus, IconPlus, Modal, Rule, TAccordionProps, TCardsGridProps, TContainerProps, TDropdownProps, TModalProps, TRulesElementProps, TTabsProps };
