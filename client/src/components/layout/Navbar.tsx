import React from 'react';
import { ReactComponent as Setting } from 'assets/icons/setting-config.svg';

type Props = {
  title?: string;
};

const Navbar = (props: Props) => {
  const { title } = props;
  return (
    <header className="flex items-center justify-between my-10 ml-10 mr-4">
      <h1 className="text-2xl font-bold font-Lora">{title}</h1>
      {title === 'Messages' && (
        <button
          type="button"
          className="w-12 h-12 p-3 border text-redAmaranth border-whiteSmoke rounded-xl"
        >
          <Setting />
        </button>
      )}
    </header>
  );
};

export default Navbar;
