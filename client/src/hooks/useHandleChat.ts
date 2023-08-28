import { Stomp } from '@stomp/stompjs';
import { useState } from 'react';
import SockJS from 'sockjs-client';

type MessageContent = {
  chatRoomId: string | undefined;
  writerId: string | number;
  message: string;
};

type SocketConnect = {
  username: string | number;
  roomId: string | undefined;
  userId: string | number;
};

const useHandleChat = (data: SocketConnect) => {
  const client = Stomp.over(() => new SockJS(`${import.meta.env.VITE_API_ADDRESS}stomp/chatroom`));
  const [key, setKey] = useState(false);

  const connectHandler = () => {
    client.connect(data, () => {
      client.subscribe('/sub/chat/room/' + data.roomId, (content) => {
        if (content) {
          console.log(content);
          setKey((prev) => !prev);
        }
      });
    });
  };

  const sendHandler = (content: MessageContent) => {
    if (client.connected) {
      client.send('/pub/chat/message', {}, JSON.stringify(content));
    } else {
      client.connect(data, () => {
        client.send('/pub/chat/message', {}, JSON.stringify(content));
      });
    }
  };

  return { connectHandler, sendHandler, key };
};

export default useHandleChat;
