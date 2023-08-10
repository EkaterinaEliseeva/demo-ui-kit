import React, { ReactElement } from 'react';
export type TContainerProps = {
    children: ReactElement;
    className: string;
};
export default function Container({ children, className }: TContainerProps): React.JSX.Element;
