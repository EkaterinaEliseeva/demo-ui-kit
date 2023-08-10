import React from 'react';
export type TCardFooterWithRangeProps = {
    name: string;
    details: string;
    rangeAction: (value: number) => void;
};
export default function CardFooterWithRange({ name, details, rangeAction }: TCardFooterWithRangeProps): React.JSX.Element;
