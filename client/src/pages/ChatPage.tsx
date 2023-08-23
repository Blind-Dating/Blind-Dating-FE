import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/useHandleChat';

const ChatPage = () => {
  const { data, isError, isLoading } = useGetChatData(1, 3);
  const { connectHandler } = useHandleChat();

  if (isError || isLoading) {
    return <></>;
  }

  connectHandler('', 1, 3);

  return (
    <NoHeaderFooterLayout>
      <ChatUser user={data?.data.otherUserNickname} />
      <ChatMessages messages={data?.data.chatList.content} />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
