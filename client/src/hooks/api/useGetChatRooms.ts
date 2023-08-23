import { useQuery } from '@tanstack/react-query';
import axiosClient from 'apis/axiosClient';

const fetchChatRooms = async () => {
  const { data } = await axiosClient.get(`api/chatroom`);
  return data;
};

export const useGetChatRooms = () => {
  const { isLoading, isError, data } = useQuery(['rooms'], fetchChatRooms);
  return { isLoading, isError, data };
};
