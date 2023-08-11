import React from 'react';
import MessageItem from './MessageItem';

const dummy = [
  { id: 0, user: '시베리아', image: '', comment: '안녕 콜록콜록', updated: '1 hour', count: 1 },
  { id: 1, user: '히죽이', image: '', comment: '안녕~~ 고양이~~', updated: '2 hour', count: 2 },
  { id: 2, user: '뽀야미', image: '', comment: '안녕하세요 뽀드득', updated: '3 hour', count: 0 },
  { id: 3, user: '시베리아', image: '', comment: '안녕 콜록콜록', updated: '5 hour', count: 1 },
  { id: 4, user: '히죽이', image: '', comment: '안녕~~ 고양이~~', updated: '6 hour', count: 2 },
  { id: 5, user: '뽀야미', image: '', comment: '안녕하세요 뽀드득', updated: '7 hour', count: 0 },
  { id: 6, user: '시베리아', image: '', comment: '안녕 콜록콜록', updated: '8 hour', count: 1 },
  { id: 7, user: '히죽이', image: '', comment: '안녕~~ 고양이~~', updated: '9 hour', count: 2 },
  { id: 8, user: '뽀야미', image: '', comment: '안녕하세요 뽀드득', updated: '10 hour', count: 0 },
  { id: 9, user: '히죽이', image: '', comment: '안녕~~ 고양이~~', updated: '10 hour', count: 2 },
  { id: 10, user: '뽀야미', image: '', comment: '안녕하세요 뽀드득', updated: '10 hour', count: 0 },
];

function MessageList() {
  return (
    <>
      <ul className="flex flex-col w-full gap-2 px-8 overflow-auto max-h-144">
        {dummy.map((data) => (
          <MessageItem key={data.id} {...data} />
        ))}
      </ul>
    </>
  );
}

export default MessageList;
