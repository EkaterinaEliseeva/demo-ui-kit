import React, { MouseEventHandler } from 'react';
type ButtonPlayProps = {
    onClick: MouseEventHandler;
    disabled?: boolean;
};
declare const ButtonPlay: ({ onClick, disabled }: ButtonPlayProps) => React.JSX.Element;
export default ButtonPlay;
