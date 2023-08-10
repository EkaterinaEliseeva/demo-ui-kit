import React, { ReactElement } from 'react';
type TContainerProps = {
    children: ReactElement;
    className: string;
};
export default function Container({ children, className }: TContainerProps): React.JSX.Element;
export {};
