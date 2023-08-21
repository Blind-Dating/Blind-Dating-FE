import { useEffect, useState } from 'react';
import ChatItem from './ChatItem';
import { useGetChatRooms } from 'hooks/api/useGetChatRooms';

function ChatList() {
  const [chatList, setChatList] = useState([]);
  const { isLoading, data } = useGetChatRooms();
  useEffect(() => {
    if (!isLoading) {
      setChatList(data.data.content);
    }
  }, [isLoading]);

  return (
    <>
      <ul className="flex flex-col w-full gap-2 px-8 overflow-auto h-144">
        {isLoading ? (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        ) : (
          <>
            {chatList.length ? (
              <>
                {chatList.map((chat, idx) => (
                  <ChatItem key={idx} {...chat} />
                ))}
              </>
            ) : (
              <li>No data</li>
            )}
          </>
        )}
      </ul>
    </>
  );
}

export default ChatList;
