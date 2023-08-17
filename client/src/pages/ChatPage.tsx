import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';

import React from 'react';

const ChatPage = () => {
  return (
    <NoHeaderFooterLayout>
      <ChatUser />
      <ChatMessages />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
