import React, { useState } from 'react';
import { RangeProps } from '@/components/input/types/range-props.type';

type CommonRangeProps = RangeProps & {
  suffix?: string;
};

const Range = ({ min, step, max, onChange, value, suffix }: CommonRangeProps) => {
  const [showInput, setShowInput] = useState(false);

  const updateValue = (value: string) => {
    const intValue = parseInt(value);
    if (intValue > max) {
      onChange(max);
      return;
    }
    if (!intValue) {
      onChange(min);
    }

    onChange(intValue);
  };

  return (
    <div className="h-9 border-1-ui rounded-lg flex items-center justify-center relative border-gray w-[200px]">
      {showInput ? (
        <input
          type="number"
          className={'appearance-none px-3 w-full'}
          value={value}
          onBlur={() => setShowInput(false)}
          onChange={e => {
            updateValue(e.target.value);
          }}
          autoFocus
        />
      ) : (
        <span className={'w-full px-3'} onClick={() => setShowInput(true)}>
          {value ? value : 0}
          {suffix}
        </span>
      )}

      <div
        className={'absolute bottom-0 left-0 h-[3px] bg-gray z-10'}
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      ></div>
      <input
        type={'range'}
        min={min}
        value={value ? value : 0}
        max={max}
        step={step}
        onChange={e => onChange(+e.target.value)}
        className={
          'h-4 absolute cursor-pointer appearance-none bottom-[-16px] text-gray focus:text-gray w-full bg-transparent'
        }
      />
    </div>
  );
};

export default Range;
