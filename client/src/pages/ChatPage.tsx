import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/useHandleChat';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { chatId } = useParams();

  const { connectHandler, key } = useHandleChat();
  const { data, isError, isLoading } = useGetChatData(chatId, 1, key);

  if (isError || isLoading) {
    return <></>;
  }

  connectHandler('nickname', chatId, 1);

  return (
    <NoHeaderFooterLayout>
      <ChatUser user={data?.data.otherUserNickname} />
      <ChatMessages messages={data?.data.chatList.content} />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
