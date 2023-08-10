import React, { MouseEventHandler } from 'react';

import PlayIcon from '@/resources/icons/play.svg';

type ButtonPlayProps = {
  onClick: MouseEventHandler;
  disabled?: boolean;
};

const ButtonPlay = ({ onClick, disabled }: ButtonPlayProps) => {
  return (
    <button
      className="bg-gray-ui/35 rounded-full group w-10 h-10 flex items-center justify-center hover:bg-gray-ui/60 focus:shadow-buttonLight focus:bg-gray-ui/60 disabled:bg-gray-ui/10 duration-std disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      <PlayIcon className="group-disabled:[&>path]:fill-gray-ui-700" />
    </button>
  );
};

export default ButtonPlay;
