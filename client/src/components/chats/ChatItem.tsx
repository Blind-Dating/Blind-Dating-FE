import React from 'react';

interface Props {
  user2Nickname: string;
  updatedAt: string;
}

const ChatItem = (props: Props) => {
  const { user2Nickname: user, updatedAt } = props;
  const updated = new Date(updatedAt).toLocaleDateString();
  return (
    <>
      <li className="flex items-center gap-4 ">
        <div className="flex items-center justify-center flex-none w-12 h-12 rounded-full bg-labelColor">
          {user.slice(0, 1)}
        </div>
        <div className="flex-1 text-sm">
          <b>{user}</b>
          <p>{'최근 메세지가 보이는 곳...'}</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <span className="text-xs font-bold text-labelColor">{updated}</span>
        </div>
      </li>
      <hr className="border-labelColor" />
    </>
  );
};

export default ChatItem;
