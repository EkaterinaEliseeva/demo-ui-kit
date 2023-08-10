import React, { ReactElement } from 'react';
export type TModalContentProps = {
    children: ReactElement;
    className: string;
};
export default function ModalContent({ children, className }: TModalContentProps): React.JSX.Element;
