import ChatItem from './ChatItem';
import { useGetChatRooms } from 'hooks/api/useGetChatRooms';

function ChatList() {
  const { isLoading, isError, data } = useGetChatRooms();

  if (isLoading || isError) {
    return (
      <ul className="flex flex-col flex-1 w-full gap-2 px-8 overflow-auto">
        <div
          className="flex-1 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
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
      {data.data && data.data?.length ? (
        <>{data.data?.map((chat) => <ChatItem key={chat.roomId} {...chat} />)}</>
      ) : (
        <li>No data</li>
      )}
    </ul>
  );
}

export default ChatList;
