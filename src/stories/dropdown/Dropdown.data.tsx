import ShareIcon from '@/resources/icons/share.svg';
import ReportIcon from '@/resources/icons/report.svg';
import { TIconProps } from '@/components/icon/types/TIconProps';

const handleOptionClick = (): void => {
  console.log('clicked');
};

export const DROPDOWN_DATA = [
  { label: 'Place a bid', callback: handleOptionClick },
  { label: 'Buy now', callback: handleOptionClick },
  {
    label: 'Normal',
    options: [
      {
        label: 'Multiply',
        callback: handleOptionClick,
      },
      {
        label: 'Screen',
        callback: handleOptionClick,
      },
      {
        label: 'Overlay',
        callback: handleOptionClick,
      },
      {
        label: 'Darken',
        callback: handleOptionClick,
      },
      {
        label: 'Lighten',
        callback: handleOptionClick,
      },
      {
        label: 'Color dodge',
        callback: handleOptionClick,
      },
      {
        label: 'Color burn',
        callback: handleOptionClick,
      },
      {
        label: 'Hard light',
        callback: handleOptionClick,
      },
      {
        label: 'Soft light',
        callback: handleOptionClick,
      },
      {
        label: 'Difference',
        callback: handleOptionClick,
      },
      {
        label: 'Exclusion',
        callback: handleOptionClick,
      },
    ],
  },
  {
    label: 'Share',
    icon: (props: TIconProps) => ShareIcon(props),
    callback: handleOptionClick,
  },
  {
    label: 'Report',
    icon: (props: TIconProps) => ReportIcon(props),
    textColor: 'red',
    callback: handleOptionClick,
  },
];
