import useHandleChatList from 'hooks/useHandleChatList';
import ChatItem from './ChatItem';
import { useGetChatRooms } from 'hooks/api/useGetChatRooms';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatListState } from 'recoil/chat/atoms';

function ChatList() {
  const { connectHandler, disconnectHandler } = useHandleChatList();
  const { isLoading, isError, data, isSuccess } = useGetChatRooms();
  const setChatList = useSetRecoilState(chatListState);
  const chatList = useRecoilValue(chatListState);

  useEffect(() => {
    if (isSuccess) {
      setChatList(data?.data);
    }
  }, [isSuccess, isError, data]);

  useEffect(() => {
    connectHandler();

    return () => disconnectHandler();
  }, []);

  if (isLoading || isError) {
    return (
      <ul className="flex flex-col flex-1 w-full h-8 gap-2 px-8 overflow-auto">
        <div
          className="flex-1 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-white align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </ul>
    );
  }

  return (
    <ul className="flex flex-col w-full gap-2 px-8 overflow-auto flex-3">
      {chatList.length ? (
        <>
          {chatList.map((chat) => (
            <ChatItem otherUserNickname={chat.otherUserNickname} updatedAt={chat.updatedAt} roomId={chat.roomId} recentMessage={chat.recentMessage} unReadCount={+chat.unReadCount} key={chat.roomId} {...chat} />
          ))}
        </>
      ) : (
        <li>채팅방이 존재하지 않습니다.</li>
      )}
    </ul>
  );
}

export default ChatList;
