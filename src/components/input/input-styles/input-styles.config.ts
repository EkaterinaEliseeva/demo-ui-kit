export const inputThemes = {
  light:
    ' focus:ring-gray-ui/35 placeholder:text-gray-ui-700 disabled:border-gray-ui-700 border-gray  disabled:bg-gray-ui/5  placeholder:text-gray-ui-700',
  dark: 'focus:ring-gray-ui-100/25 border-gray-ui-700 disabled:bg-gray-ui-100/5 disabled:placeholder:text-gray-ui-700/50 placeholder:text-gray-ui-100/50 focus:placeholder:text-gray-ui-100 hover:bg-gray-ui-100/5 focus:bg-gray-ui-100/10',
};

export const inputStyle =
  'transition duration-std bg-transparent border-1-ui rounded-lg text-sm focus:ring-3 focus:ring-inset w-full invalid:text-red-ui invalid:placeholder:text-red-ui invalid:border-red-ui invalid:focus:ring-0 invalid:bg-red-ui/10';

export const checkboxThemes = {
  light:
    'border-gray peer-checked:bg-gray peer-hover:bg-gray-ui/5 peer-hover:peer-checked:bg-gray-ui-900 peer-focus:peer-checked:bg-gray-ui-900 peer-focus:bg-gray-ui/10  peer-focus:ring-gray-ui/35 peer-disabled:bg-gray-ui/10 peer-disabled:border-gray-ui-300',
  dark: 'border-gray-ui-700 peer-checked:bg-yellow-ui-500 peer-hover:bg-gray-ui-100/5 peer-hover:peer-checked:bg-yellow-ui-400 peer-focus:peer-checked:bg-yellow-ui-400 peer-focus:bg-gray-ui-100/10  peer-focus:ring-yellow-ui-500/40 peer-disabled:bg-gray-ui-100/10 peer-disabled:bg-gray-ui-100/30',
};

export const checkboxSizes = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
};

export const toggleStyles = {
  light:
    'before:bg-gray-ui/35 checked:before:bg-gray hover:after:ring-gray-ui/10 focus:after:ring-gray-ui/10 disabled:before:bg-gray-ui/10 disabled:checked:before:bg-gray-ui-300',
  dark: 'before:bg-gray-ui-100/25 checked:before:bg-yellow-ui-500 checked:hover:after:ring-yellow-ui-500/20 checked:focus:after:ring-yellow-ui-500/40 hover:after:ring-gray-ui-100/10 focus:after:ring-gray-ui-100/10 disabled:before:bg-gray-ui-100/10',
};

export const tickIconThemes = {
  light: 'peer-checked:peer-disabled:[&>path]:stroke-gray-ui/60',
  dark: '[&>path]:stroke-gray peer-checked:peer-disabled:[&>path]:stroke-gray-ui-100/60',
};

export const selectSize = {
  md: 'h-[50px]',
  sm: 'h-9',
};
