import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/useHandleChat';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { chatDataState } from 'recoil/chat/atoms';

const ChatPage = () => {
  const { chatId } = useParams();
  const { connectHandler } = useHandleChat();
  const { data, isError, isLoading, isSuccess } = useGetChatData(chatId);
  const setChatData = useSetRecoilState(chatDataState);

  useEffect(() => {
    connectHandler(chatId);
  }, []);

  useEffect(() => {
    if (data) {
      setChatData(data.data.chatList);
    }
  }, [isSuccess]);

  if (isError || isLoading) {
    return <></>;
  }

  return (
    <NoHeaderFooterLayout>
      <ChatUser user={data?.data.otherUserNickname} />
      <ChatMessages />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
