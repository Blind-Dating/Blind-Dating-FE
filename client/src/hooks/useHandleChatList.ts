import { Stomp } from '@stomp/stompjs';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user/atoms';
import SockJS from 'sockjs-client';

const useHandleChatList = () => {
  const client = Stomp.over(() => new SockJS(`${import.meta.env.VITE_API_ADDRESS}stomp/chatroom`));
  const { userId } = useRecoilValue(userState);
  const [key, setKey] = useState(false);
  const queryClient = useQueryClient();

  const connectHandler = () => {
    client.connect({}, () => {
      client.subscribe('/sub/chatroom/' + userId, (content) => {
        if (content) {
          setKey((prev) => !prev);
          queryClient.invalidateQueries(['rooms', key]);
        }
      });
    });
  };

  const disconnectHandler = (roomId: string | undefined) => {
    if (client.connected) {
      client.send(
        '/pub/chat/disconnect',
        {},
        JSON.stringify({ chatRoomId: roomId, writerId: userId })
      );
    } else {
      client.connect({}, () => {
        client.send(
          '/pub/chat/disconnect',
          {},
          JSON.stringify({ chatRoomId: roomId, writerId: userId })
        );
      });
    }
  };

  return { connectHandler, disconnectHandler, key };
};

export default useHandleChatList;
