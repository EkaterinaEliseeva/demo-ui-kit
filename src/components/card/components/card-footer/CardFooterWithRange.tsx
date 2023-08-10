import React, { useState } from 'react';

import Button from '@/components/buttons/button';
import RangeMod from '@/components/input/range-mod';
import OverflowIcon from '@/resources/icons/overflow.svg';
import { buttonSizesEnum, buttonTypesEnum } from '@/components/buttons/types/button-styles.enum';

type TCardFooterWithRangeProps = {
  name: string;
  details: string;
  rangeAction: (value: number) => void;
};

export default function CardFooterWithRange({ name, details, rangeAction }: TCardFooterWithRangeProps) {
  const [rangeModValue, setRangeModValue] = useState<number>(0);

  const rangeActionHandler = (value: number) => {
    setRangeModValue(value);
    rangeAction(value);
  };

  return (
    <div className="w-full p-4 flex flex-col gap-y-2.5">
      <div className="common-text font-semibold">{name}</div>
      <RangeMod min={0} max={1000} value={rangeModValue} step={1} onChange={rangeActionHandler} />
      <div className="flex justify-between items-center gap-x-2">
        <span className="text-gray-ui/60">{details}</span>
        <Button size={buttonSizesEnum.xsSquare} type={buttonTypesEnum.noBorder} onClick={() => {}}>
          <OverflowIcon className={'h-4 w-4'} />
        </Button>
      </div>
    </div>
  );
}
