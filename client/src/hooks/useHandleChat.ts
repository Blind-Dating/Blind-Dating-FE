import { Stomp } from '@stomp/stompjs';
import { useState } from 'react';
import SockJS from 'sockjs-client';

type MessageContent = {
  chatRoomId: number;
  writerId: number;
  message: string;
};

const useHandleChat = () => {
  const client = Stomp.over(() => new SockJS(`${import.meta.env.VITE_API_ADDRESS}stomp/chatroom`));
  const [key, setKey] = useState(false);

  const connectHandler = (username: string, roomId: string | undefined, userId: number) => {
    client.connect({ username, roomId, userId }, () => {
      client.subscribe('/sub/chatroom/' + roomId, (content) => {
        if (content) {
          setKey((prev) => !prev);
        }
      });
    });
  };

  const sendHandler = (content: MessageContent) => {
    if (client.connected) {
      client.send('/pub/chat/message', {}, JSON.stringify(content));
    } else {
      client.connect({ username: '', roomId: 1, userId: 3 }, () => {
        client.send('/pub/chat/message', {}, JSON.stringify(content));
      });
    }
  };

  return { connectHandler, sendHandler, key };
};

export default useHandleChat;
