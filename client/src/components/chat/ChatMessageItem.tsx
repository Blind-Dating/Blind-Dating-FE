import React from 'react';

type Props = { messageId: number; content: string; senderId: number; created: string };

const ChatMessageItem = (props: Props) => {
  const { content } = props;
  return (
    <li>
      <p>{content}</p>
    </li>
  );
};

export default ChatMessageItem;
