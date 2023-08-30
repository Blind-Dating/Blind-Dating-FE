import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

type ChatDataParams = {
  roomId: string | undefined;
  chatId?: number | undefined;
};

const fetchChatData = async (roomId: ChatDataParams, chatId?: ChatDataParams) => {
  const { data } = await axiosWithAuth.get(`api/chatroom/${roomId}`, {
    params: { chatId: chatId || 0 },
  });
  return data;
};

export const useGetChatData = (roomId: ChatDataParams, chatId?: ChatDataParams) => {
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
