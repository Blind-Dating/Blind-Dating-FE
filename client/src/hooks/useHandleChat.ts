import { Stomp } from '@stomp/stompjs';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatDataState } from 'recoil/chat/atoms';
import { userState } from 'recoil/user/atoms';
import SockJS from 'sockjs-client';

type MessageContent = {
  chatRoomId: string | undefined;
  writerId: string | number;
  message: string;
};

const useHandleChat = () => {
  const client = Stomp.over(() => new SockJS(`${import.meta.env.VITE_API_ADDRESS}stomp/chat`));
  const { userId, userName: username } = useRecoilValue(userState);
  const navigate = useNavigate();
  const setChatData = useSetRecoilState(chatDataState);

  const connectHandler = (roomId: string | undefined) => {
    client.connect({ userId, username, roomId }, () => {
      client.subscribe('/sub/chat/room/' + roomId, (content) => {
        if (content) {
          setChatData((prev) => [JSON.parse(content.body), ...prev]);
        }
      });
    });
  };

  const sendHandler = (content: MessageContent) => {
    if (client.connected) {
      client.send('/pub/chat/message', {}, JSON.stringify(content));
    } else {
      client.connect({ userId, username, roomId: content.chatRoomId }, () => {
        client.send('/pub/chat/message', {}, JSON.stringify(content));
      });
    }
  };

  const disconnectHandler = (roomId: string | undefined) => {
    if (client.connected) {
      client.send(
        '/pub/chat/disconnect',
        {},
        JSON.stringify({ chatRoomId: roomId, writerId: userId })
      );
    } else {
      client.connect({ userId, username, roomId }, () => {
        client.send(
          '/pub/chat/disconnect',
          {},
          JSON.stringify({ chatRoomId: roomId, writerId: userId })
        );
      });
    }

    navigate('/chat-list');
  };

  return { connectHandler, sendHandler, disconnectHandler };
};

export default useHandleChat;
