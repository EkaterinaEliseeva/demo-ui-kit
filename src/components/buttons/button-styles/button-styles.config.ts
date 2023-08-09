export const buttonTypes = {
  full: 'bg-gray text-gray-100 focus:ring-gray/35 disabled:bg-gray/10 disabled:text-gray/60 before:bg-gray-900 focus:ring-3',
  empty:
    ' class border-1 border-solid border-gray before:bg-gray/5 focus:ring-gray/35 focus:bg-gray/5 disabled:border-gray-700 disabled:text-gray/60 focus:ring-3',

  brand:
    'bg-yellow-500 text-gray before:bg-yellow-400 focus:ring-yellow-500/40 focus:bg-yellow-400 disabled:text-gray-300 disabled:bg-white/10 focus:ring-3',

  darkEmpty:
    'border-1 border-solid border-gray-700 before:bg-gray-100/5 focus:ring-gray-100/25 focus:bg-gray-100/5 disabled:text-gray-700 focus:ring-3',

  grayNoBorder: 'bg-gray/5 before:bg-gray/10 focus:ring-gray/35 disabled:bg-gray/10 disabled:text-gray/60 focus:ring-3',

  darkGrayNoBorder:
    'bg-gray-100/5 before:bg-gray-100/10 focus:ring-gray-100/25 disabled:bg-gray-100/5 disabled:text-gray-700 focus:ring-3',

  noBorder: 'before:bg-gray/5 focus:ring-gray/35 focus:ring-3 ',

  noBorderGroup: 'before:bg-gray/5 focus:bg-gray/10',

  darkNoBorder: 'before:bg-gray-100/5 focus:ring-gray-100/25 focus:ring-3 ',
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
  'ml-2 flex border-1 border-gray h-9 p-[3px] gap-[3px] rounded-lg items-center justify-center';
