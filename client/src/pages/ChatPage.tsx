import { useQueryClient } from '@tanstack/react-query';
import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/useHandleChat';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user/atoms';

const ChatPage = () => {
  const { chatId } = useParams();
  const { id, nickname } = useRecoilValue(userState);
  const { connectHandler, key } = useHandleChat({ username: nickname, roomId: chatId, userId: id });
  const { data, isError, isLoading } = useGetChatData(chatId, id, key);
  const queryClient = useQueryClient();

  useEffect(() => {
    connectHandler();
    queryClient.invalidateQueries(['chatroom', key]);
  }, []);

  if (isError || isLoading) {
    return <></>;
  }

  return (
    <NoHeaderFooterLayout>
      <ChatUser user={data?.data.otherUserNickname} />
      <ChatMessages messages={data?.data.chatList.content} user={id} />
      <ChatForm />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
