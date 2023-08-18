import React from 'react';

type Props = {
  width: number;
};

export const ProgressBar = ({ width }: Props) => {
  return (
    <div className="w-full h-2 mb-9 bg-grayLignt">
      <div className={`"${width} h-full duration-300 ease-in-out bg-redAmaranth" `}></div>
    </div>
  );
};
