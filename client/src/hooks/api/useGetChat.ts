import { useQuery } from '@tanstack/react-query';
import axiosClient from 'apis/axiosClient';

const fetchChatData = async (roomId: string | undefined, userId: number) => {
  const { data } = await axiosClient.get(`api/chatroom/${roomId}`, { params: { userId } });
  return data;
};

export const useGetChatData = (roomId: string | undefined, userId: number, key: boolean) => {
  const { isLoading, data, isError } = useQuery(['chatroom', key], () =>
    fetchChatData(roomId, userId)
  );
  return { isLoading, isError, data };
};
