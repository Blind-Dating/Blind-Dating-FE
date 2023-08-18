import React from 'react';

type Props = {
  user: number;
  messageId: number;
  content: string;
  senderId: number;
  created: string;
};

const ChatMessageItem = (props: Props) => {
  const { content, senderId, user, created } = props;
  return (
    <li
      className={`flex flex-col font-Lora max-w-[80%] ${
        senderId === user ? 'justify-self-end ' : 'justify-self-start'
      }`}
    >
      <p
        className={`p-4 text-sm rounded-lg ${
          senderId === user ? 'bg-whiteSmoke rounded-br-none' : 'bg-redAmaranth/10 rounded-bl-none'
        }`}
      >
        {content}
      </p>
      <span className={`text-xs text-labelColor ${senderId === user ? 'text-right' : ''}`}>
        {created.slice(12, 20)}
      </span>
    </li>
  );
};

export default ChatMessageItem;
