import { ReactNode } from 'react';

type TRulesElementProps = {
    text: string;
    color: string;
    disabled?: boolean;
    children: ReactNode;
    onClick: () => void;
};

export { TRulesElementProps };
