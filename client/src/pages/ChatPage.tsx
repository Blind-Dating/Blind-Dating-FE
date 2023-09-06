import { useQueryClient } from '@tanstack/react-query';
import ChatForm from 'components/chat/ChatForm';
import ChatMessages from 'components/chat/ChatMessages';
import ChatUser from 'components/chat/ChatUser';
import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import useInfiniteScroll from 'hooks/UseInfiniteScroll';
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
  const { data, isError, isLoading, fetchNextPage } = useGetChatData(chatId);
  const { connectHandler, disconnectHandler, sendHandler, exitHandler } = useHandleChat();
  const setChatData = useSetRecoilState(chatDataState);
  const queryClient = useQueryClient();

  useEffect(() => {
    connectHandler(chatId);

    return () => {
      disconnectHandler();
      queryClient.clear();
      setChatData([]);
    };
  }, []);

  useEffect(() => {
    if (data) {
      const prevChatData = data.pages[data.pages.length - 1].data.chatList;
      setChatData((prev) => [...prev, ...prevChatData]);
    }
  }, [data, setChatData]);

  const onIntersect = async (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    observer.unobserve(entry.target);
    if (entry.isIntersecting) {
      fetchNextPage();
    }
  };

  const { top, section } = useInfiniteScroll(onIntersect);

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

  const handleExit = () => {
    exitHandler(chatId);
  };

  return (
    <NoHeaderFooterLayout>
      <ChatUser user={data?.pages[0].data.otherUserNickname} onExit={handleExit} />
      <ChatMessages scrollRef={top} sectionRef={section} />
      <ChatForm onMessage={handleMessage} roomStatus={data?.pages[0].data.roomStatus} />
    </NoHeaderFooterLayout>
  );
};

export default ChatPage;
