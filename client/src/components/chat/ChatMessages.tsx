import React from 'react';
import ChatMessageItem from './ChatMessageItem';

type Props = {
  messages: { messageId: number; content: string; senderId: number; created: string }[];
};

const ChatMessageDate = ({ date }: { date: string }) => {
  return (
    <li className="my-2">
      <div className="relative text-center">
        <hr className="absolute left-0 w-full border-t border-whiteLilac bottom-1/2" />
        <span className="relative z-10 p-2 text-sm bg-white text-labelColor">{date}</span>
      </div>
    </li>
  );
};

const ChatMessages = ({ messages }: Props) => {
  const messageDates: string[] = [];
  const dataWithDate = [];

  for (let i = 0; i < messages.length; i++) {
    if (messageDates[messageDates.length - 1] !== messages[i].created) {
      messageDates.push(messages[i].created);
      dataWithDate.push(<ChatMessageDate key={messages[i].created} date={messages[i].created} />);
    }
    dataWithDate.push(<ChatMessageItem key={messages[i].messageId} {...messages[i]} />);
  }

  return (
    <section className="px-10 py-2.5 flex-1 w-full">
      <ul className="grid grid-cols-1 gap-2">{dataWithDate}</ul>
    </section>
  );
};

export default ChatMessages;
