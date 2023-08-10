import React, { useState } from 'react';
import Button from '../buttons/button';
import { buttonSizesEnum, buttonTypesEnum } from '../buttons/types/button-styles.enum';
import HashIcon from '@/resources/icons/hash.svg';
import PercentIcon from '@/resources/icons/percent.svg';
import Range from './range';
import { buttonGroupContainerStyle } from '../buttons/button-styles/button-styles.config';
import { RangeProps } from '@/components/input/types/range-props.type';

const RangeMod = ({ min, max, step, value, onChange }: RangeProps) => {
  const [isPercent, setIsPercent] = useState(false);
  const [percent, setPercentValue] = useState<number>(0);

  const changePercentValue = (value: number) => {
    setPercentValue(value);
    onChange(max * (value / 100));
  };

  const changeNumeric = (value: number) => {
    onChange(value);
    setPercentValue(Math.round((value / max) * 100));
  };

  return (
    <div className="flex min-w-full">
      {isPercent ? (
        <Range min={0} max={100} step={1} onChange={changePercentValue} value={percent} suffix="%" />
      ) : (
        <Range min={min} max={max} step={step} onChange={changeNumeric} value={value} />
      )}

      <div className={buttonGroupContainerStyle}>
        <Button
          onClick={() => {
            setIsPercent(false);
          }}
          disabled={!isPercent}
          type={buttonTypesEnum.noBorderGroup}
          size={buttonSizesEnum.smSquareGroup}
          className={'group disabled:bg-gray-ui/10'}
        >
          <HashIcon />
        </Button>
        <Button
          onClick={() => {
            setIsPercent(true);
          }}
          disabled={isPercent}
          type={buttonTypesEnum.noBorderGroup}
          size={buttonSizesEnum.smSquareGroup}
          className={'group disabled:bg-gray-ui/10'}
        >
          <PercentIcon />
        </Button>
      </div>
    </div>
  );
};

export default RangeMod;
