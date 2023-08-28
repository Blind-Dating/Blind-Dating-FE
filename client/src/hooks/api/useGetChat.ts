import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

const fetchChatData = async (roomId: string | undefined, userId: string | number) => {
  const { data } = await axiosWithAuth.get(`api/chatroom/${roomId}`, { params: { userId } });
  return data;
};

export const useGetChatData = (
  roomId: string | undefined,
  userId: string | number,
  key: boolean
) => {
  const { isLoading, data, isError } = useQuery(['chatroom', key], () =>
    fetchChatData(roomId, userId)
  );
  return { isLoading, isError, data };
};
