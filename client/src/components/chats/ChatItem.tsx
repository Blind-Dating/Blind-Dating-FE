import React from 'react';

interface Props {
  id: number;
  user: string;
  image: string;
  comment: string;
  updated: string;
  count?: number;
}

const ChatItem = (props: Props) => {
  const { user, image, comment, updated, count } = props;
  return (
    <>
      <li className="flex items-center gap-4 ">
        <div className="flex-none w-12 h-12 rounded-full bg-labelColor">{image}</div>
        <div className="flex-1 text-sm">
          <b>{user}</b>
          <p>{comment}</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <span className="text-xs font-bold text-labelColor">{updated}</span>
          {count ? (
            <div className="flex items-end justify-center w-5 h-5 rounded-full bg-redAmaranth">
              <span className="text-xs text-whiteSmoke">{count}</span>
            </div>
          ) : (
            <div className="w-5 h-5" />
          )}
        </div>
      </li>
      <hr className="border-labelColor" />
    </>
  );
};

export default ChatItem;
