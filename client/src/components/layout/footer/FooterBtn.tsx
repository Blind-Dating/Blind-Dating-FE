import React from 'react';

type Props = {
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected: boolean;
  fill: string;
};

export const FooterBtn = (props: Props) => {
  const { icon, onClick, isSelected, fill } = props;
  const iconWithProps = React.cloneElement(icon as React.ReactElement, { fill, stroke: fill });

  return (
    <button
      type="button"
      className={`flex items-center justify-center w-16 h-12 border-t-2 transition duration-75 ${
        isSelected ? ' border-redAmaranth/80' : 'border-whiteLilac'
      }`}
      onClick={onClick}
    >
      {iconWithProps}
    </button>
  );
};