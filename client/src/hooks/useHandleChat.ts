import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

type MessageContent = {
  chatRoomId: number;
  writerId: number;
  message: string;
};

const useHandleChat = () => {
  const client = Stomp.over(() => new SockJS(`${import.meta.env.VITE_API_ADDRESS}stomp/chat`));

  const connectHandler = (username: string, roomId: number, userId: number) => {
    client.connect({ username, roomId, userId }, () => {
      client.subscribe('/sub/chat/room/' + roomId, () => {});
    });
  };

  const sendHandler = (content: MessageContent) => {
    client.send('/pub/chat/message', {}, JSON.stringify(content));
  };

  return { connectHandler, sendHandler };
};

export default useHandleChat;
