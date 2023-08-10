export type RangeProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
};
