import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

const fetchChatData = async (roomId: string | undefined) => {
  const { data } = await axiosWithAuth.get(`api/chatroom/${roomId}`);
  return data;
};

export const useGetChatData = (roomId: string | undefined, key: boolean) => {
  const { isLoading, data, isError } = useQuery(['chatroom', key], () => fetchChatData(roomId));
  return { isLoading, isError, data };
};
