import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/useHandleChat';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatDataState } from 'recoil/chat/atoms';
import { userState } from 'recoil/user/atoms';

const ChatPage = () => {
  const { chatId } = useParams();
  const { userId } = useRecoilValue(userState);
  const { data, isError, isLoading, isSuccess } = useGetChatData(chatId);
  const { connectHandler, disconnectHandler, sendHandler } = useHandleChat();
  const setChatData = useSetRecoilState(chatDataState);

  useEffect(() => {
    connectHandler(chatId);

    return () => disconnectHandler();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setChatData(data.data.chatList);
    }
  }, [isSuccess, isError, data]);

  if (isError || isLoading) {
    return <></>;
  }

  const handleMessage = (message: string) => {
    const content = {
      chatRoomId: chatId,
      writerId: userId,
      message,
    };
    sendHandler(content);
  };

  return (
    <NoHeaderFooterLayout>
      <ChatUser user={data?.data.otherUserNickname} />
      <ChatMessages />
      <ChatForm onMessage={handleMessage} />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
