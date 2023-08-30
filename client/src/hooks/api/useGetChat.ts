import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

type RoomId = string | undefined;
type ChatId = number | undefined;

const fetchChatData = async (roomId: RoomId, chatId?: ChatId) => {
  const { data } = await axiosWithAuth.get(`api/chatroom/${roomId}`, {
    params: { chatId: chatId || 0 },
  });
  return data;
};

export const useGetChatData = (roomId: RoomId, chatId?: ChatId) => {
  const { isLoading, data, isError, isSuccess } = useQuery(['chatroom'], () =>
    fetchChatData(roomId, chatId)
  );

  return {
    isLoading,
    isError,
    data,
    isSuccess,
  };
};
