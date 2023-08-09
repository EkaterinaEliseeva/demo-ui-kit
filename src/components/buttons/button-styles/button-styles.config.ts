export const buttonTypes = {
  full: 'bg-gray/ui text-gray/ui-100 focus:ring-gray/ui/35 disabled:bg-gray/ui/10 disabled:text-gray/ui/60 before:bg-gray/ui-900 focus:ring-3',
  empty:
    ' class border-1 border-solid border-gray/ui before:bg-gray/ui/5 focus:ring-gray/ui/35 focus:bg-gray/ui/5 disabled:border-gray/ui/700 disabled:text-gray/ui/60 focus:ring-3',

  brand:
    'bg-yellow-500 text-gray/ui before:bg-yellow-400 focus:ring-yellow-500/40 focus:bg-yellow-400 disabled:text-gray/ui/300 disabled:bg-white/10 focus:ring-3',

  darkEmpty:
    'border-1 border-solid border-gray/ui/700 before:bg-gray/ui-100/5 focus:ring-gray/ui-100/25 focus:bg-gray/ui-100/5 disabled:text-gray/ui/700 focus:ring-3',

  grayNoBorder: 'bg-gray/ui/5 before:bg-gray/ui/10 focus:ring-gray/ui/35 disabled:bg-gray/ui/10 disabled:text-gray/ui/60 focus:ring-3',

  darkGrayNoBorder:
    'bg-gray/ui-100/5 before:bg-gray/ui-100/10 focus:ring-gray/ui-100/25 disabled:bg-gray/ui-100/5 disabled:text-gray/ui/700 focus:ring-3',

  noBorder: 'before:bg-gray/ui/5 focus:ring-gray/ui/35 focus:ring-3 ',

  noBorderGroup: 'before:bg-gray/ui/5 focus:bg-gray/ui/10',

  darkNoBorder: 'before:bg-gray/ui-100/5 focus:ring-gray/ui-100/25 focus:ring-3 ',
};

export const buttonSizes = {
  xs: 'px-2 h-6',
  xsSquare: 'w-6 h-6',
  sm: 'h-9 px-4',
  smSquare: 'h-9 w-9',
  smSquareGroup: 'h-[30px] w-[30px]',
  md: 'h-13 px-6',
  mdSquare: 'h-13 w-13',
  lg: 'lg',
  wide: 'wide',
};

export const buttonGroupContainerStyle =
  'ml-2 flex border-1 border-gray/ui h-9 p-[3px] gap-[3px] rounded-lg items-center justify-center';
