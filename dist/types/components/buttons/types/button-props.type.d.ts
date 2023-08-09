import { ReactNode } from 'react';
import { buttonSizesEnum, buttonTypesEnum } from '@/components/buttons/types/button-styles.enum';
export type ButtonProps = {
    children: ReactNode;
    type: buttonTypesEnum;
    size: buttonSizesEnum;
    className?: string;
};
