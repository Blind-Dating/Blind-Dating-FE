import React from 'react';
import ChatMessageItem from './ChatMessageItem';

const ChatMessageDate = ({ date }: { date: string }) => {
  return (
    <li className="my-2">
      <div className="relative text-center">
        <hr className="absolute left-0 w-full border-t border-whiteLilac bottom-1/2" />
        <span className="relative z-10 p-2 text-xs bg-white text-labelColor">
          {date.slice(0, 12)}
        </span>
      </div>
    </li>
  );
};

type Props = {
  user: number;
  messages: { messageId: number; content: string; senderId: number; created: string }[];
};

const ChatMessages = ({ user, messages }: Props) => {
  const messageDates: string[] = [];
  const dataWithDate = [];

  for (let i = 0; i < messages.length; i++) {
    if (messageDates[messageDates.length - 1] !== messages[i].created.slice(0, 11)) {
      messageDates.push(messages[i].created.slice(0, 11));
      dataWithDate.push(<ChatMessageDate key={messages[i].created} date={messages[i].created} />);
    }
    dataWithDate.push(<ChatMessageItem key={messages[i].messageId} user={user} {...messages[i]} />);
  }

  return (
    <section className="px-10 py-2.5 flex-1 w-full max-h-[70%] overflow-auto ">
      <ul className="grid grid-cols-1 gap-2 ">{dataWithDate}</ul>
    </section>
  );
};

export default ChatMessages;
