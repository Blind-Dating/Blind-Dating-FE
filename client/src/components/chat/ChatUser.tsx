import React from 'react';
import { ReactComponent as More } from '/public/icons/more.svg';

type Props = { id: number; name: string; image: string; status: string };

const ChatUser = (props: Props) => {
  const { name, image, status } = props;
  return (
    <section className="flex items-center w-full gap-2 px-10 py-8">
      <div className="w-12 h-12 rounded-full bg-labelColor">{image}</div>
      <div className="flex flex-col flex-1">
        <h2 className="text-xl font-bold font-Lora">{name}</h2>
        <b className="mx-1 text-xs text-labelColor">{status}</b>
      </div>
      <button
        type="button"
        className="w-12 h-12 p-3 border text-redAmaranth border-whiteSmoke rounded-xl"
      >
        <More />
      </button>
    </section>
  );
};

export default ChatUser;
