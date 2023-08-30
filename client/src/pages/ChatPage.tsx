import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/useHandleChat';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { chatId } = useParams();
  const { connectHandler } = useHandleChat();
  const { otherUser, isError, isLoading } = useGetChatData(chatId);

  useEffect(() => {
    connectHandler(chatId);
  }, []);

  if (isError || isLoading) {
    return <></>;
  }

  return (
    <NoHeaderFooterLayout>
      <ChatUser user={otherUser} />
      <ChatMessages />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
