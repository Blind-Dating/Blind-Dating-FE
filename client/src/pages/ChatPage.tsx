import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/useHandleChat';
import { useEffect } from 'react';

const ChatPage = () => {
  const { data, isError, isLoading } = useGetChatData(2, 3);
  const { connectHandler } = useHandleChat();

  useEffect(() => {
    connectHandler('', 2, 3);
  }, []);

  if (isError || isLoading) {
    return <></>;
  }

  return (
    <NoHeaderFooterLayout>
      <ChatUser name="nickname" />
      <ChatMessages messages={data?.data} />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
