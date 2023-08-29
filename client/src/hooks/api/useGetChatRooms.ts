import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

const fetchChatRooms = async () => {
  const { data } = await axiosWithAuth.get(`api/chatroom`);
  return data;
};

export const useGetChatRooms = (key: boolean) => {
  const { isLoading, isError, data } = useQuery(['rooms', key], fetchChatRooms);
  return { isLoading, isError, data };
};
