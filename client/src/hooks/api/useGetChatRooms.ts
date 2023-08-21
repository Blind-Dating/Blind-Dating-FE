import { useQuery } from '@tanstack/react-query';
import axiosClient from 'apis/axiosClient';

const fetchChatRooms = async () => {
  const { data } = await axiosClient.get(`api/rooms/${1}`, {});
  return data;
};

export const useGetChatRooms = () => {
  const { isLoading, data } = useQuery(['rooms'], fetchChatRooms);
  return { isLoading, data };
};
