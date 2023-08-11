import React from 'react';
import { ReactComponent as Setting } from '/public/icons/setting-config.svg';

type Props = {
  title?: string;
};

const Navbar = (props: Props) => {
  const { title } = props;
  return (
    <header className="my-10 mx-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold font-Lora">{title}</h1>
      {title === 'Messages' && (
        <button
          type="button"
          className="w-12 h-12 p-3 text-redAmaranth border border-whiteSmoke rounded-xl"
        >
          <Setting />
        </button>
      )}
    </header>
  );
};

export default Navbar;
