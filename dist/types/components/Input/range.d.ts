import React from 'react';
import { RangeProps } from '@/components/input/types/range-props.type';
type CommonRangeProps = RangeProps & {
    suffix?: string;
};
declare const Range: ({ min, step, max, onChange, value, suffix }: CommonRangeProps) => React.JSX.Element;
export default Range;
