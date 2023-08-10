import React from 'react';

import Range from './range';
import Button from '../buttons/button';
import { IconMinus, IconPlus } from '@/components/icon';
import { buttonSizesEnum, buttonTypesEnum } from '../buttons/types/button-styles.enum';
import { buttonGroupContainerStyle } from '../buttons/button-styles/button-styles.config';
import { RangeProps } from '@/components/input/types/range-props.type';

const RangeInc = (props: RangeProps) => {
  const changeValueDec = () => {
    if (props.value - props.min > props.step) {
      props.onChange(props.value - props.step);
      return;
    }
    props.onChange(props.min);
  };

  const changeValueInc = () => {
    if (props.max - props.value > props.step) {
      props.onChange(props.value + props.step);
      return;
    }
    props.onChange(props.max);
  };

  return (
    <div className="flex min-w-full">
      <Range min={props.min} max={props.max} step={props.step} onChange={props.onChange} value={props.value} />
      <div className={buttonGroupContainerStyle}>
        <Button
          onClick={changeValueDec}
          disabled={props.value == props.min}
          type={buttonTypesEnum.noBorderGroup}
          size={buttonSizesEnum.smSquareGroup}
          className={'group'}
        >
          <IconMinus className={'group-disabled:after:bg-gray-ui-700'} />
        </Button>
        <Button
          onClick={changeValueInc}
          disabled={props.value == props.max}
          type={buttonTypesEnum.noBorderGroup}
          size={buttonSizesEnum.smSquareGroup}
          className={'group'}
        >
          <IconPlus className={'group-disabled:after:bg-gray-ui-700 group-disabled:before:bg-gray-ui-700'} />
        </Button>
      </div>
    </div>
  );
};

export default RangeInc;
