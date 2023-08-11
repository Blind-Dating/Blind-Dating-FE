import React from 'react';

interface Props {
  id: number;
  user: string;
  image: string;
  comment: string;
  updated: string;
  count?: number;
}

const MessageItem = (props: Props) => {
  const { user, image, comment, updated, count } = props;
  return (
    <li className="flex gap-4 items-center	">
      <div className="rounded-full bg-labelColor w-12 h-12 flex-none">{image}</div>
      <div className="flex-1 text-sm">
        <b>{user}</b>
        <p>{comment}</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <span className="font-bold text-xs text-labelColor">{updated}</span>
        {!!count && (
          <div className="rounded-full bg-redAmaranth w-5 h-5 flex items-end justify-center">
            <span className="text-whiteSmoke text-xs">{count}</span>
          </div>
        )}
      </div>
    </li>
  );
};

export default MessageItem;
