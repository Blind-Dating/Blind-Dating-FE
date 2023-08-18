import React from 'react';

type Props = {
  width: string;
};

export const ProgressBar = ({ width }: Props) => {
  const widthConfig: Record<string, string> = {
    '3/4': 'w-3/4',
  };
  return (
    <div className="w-full h-2 mb-9 bg-grayLignt">
      <div className={`${widthConfig[width]} h-full duration-300 ease-in-out bg-redAmaranth`}></div>
    </div>
  );
};
