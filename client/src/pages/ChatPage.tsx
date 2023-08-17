import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';

import React from 'react';

const chatDummy = {
  id: 0,
  user: { id: 0, name: 'Grace', image: '', status: 'Online' },
  messages: [
    {
      messageId: 0,
      content:
        "I got my peaches out in Georgia (oh, yeah, sh*t) I get my weed from California (that's that sh*t)",
      senderId: 0,
      created: '2023. 8. 16.',
    },
    {
      messageId: 1,
      content:
        "I took my chick up to the North, yeah (badass b*tch)      I get my light right from the source, yeah (yeah, that's it)",
      senderId: 1,
      created: '2023. 8. 16.',
    },
    {
      messageId: 2,
      content: "And I see you (oh), the way I breathe you in (in), it's the texture of your skin",
      senderId: 0,
      created: new Date().toLocaleDateString(),
    },
    {
      messageId: 3,
      content: 'I wanna wrap my arms around you, baby, never let you go, oh',
      senderId: 1,
      created: new Date().toLocaleDateString(),
    },
    {
      messageId: 4,
      content: "And I say, oh, there's nothing like your touch",
      senderId: 0,
      created: new Date().toLocaleDateString(),
    },
  ],
};

const ChatPage = () => {
  return (
    <NoHeaderFooterLayout>
      <ChatUser {...chatDummy.user} />
      <ChatMessages key={chatDummy.id} messages={chatDummy.messages} />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
