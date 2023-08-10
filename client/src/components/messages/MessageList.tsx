import React from 'react';
import MessageItem from './MessageItem';

const dummy = [
  { id: 0, user: '시베리아', image: '', comment: '안녕 콜록콜록', updated: '1 hour', count: 1 },
  { id: 1, user: '히죽이', image: '', comment: '안녕~~ 고양이~~', updated: '2 hour', count: 2 },
  { id: 2, user: '뽀야미', image: '', comment: '안녕하세요 뽀드득', updated: '3 hour', count: 0 },
];

function MessageList() {
  return (
    <>
      <ul className="flex flex-col gap-4 w-full px-8">
        {dummy.map((data) => (
          <MessageItem key={data.id} {...data} />
        ))}
      </ul>
    </>
  );
}

export default MessageList;
