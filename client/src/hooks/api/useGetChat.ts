import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';
import { useSetRecoilState } from 'recoil';
import { chatDataState } from 'recoil/chat/atoms';

const fetchChatData = async (roomId: string | undefined, chatId?: number | undefined) => {
  const { data } = await axiosWithAuth.get(`api/chatroom/${roomId}`, {
    params: { chatId: chatId || 0 },
  });
  return data;
};

export const useGetChatData = (roomId: string | undefined, chatId?: number | undefined) => {
  const { isLoading, data, isError } = useQuery(['chatroom'], () => fetchChatData(roomId, chatId));
  const setChatData = useSetRecoilState(chatDataState);

  if (data) {
    setChatData(data.data.chatList);
  }
  return { isLoading, isError, otherUser: data?.data.otherUserNickname };
};
