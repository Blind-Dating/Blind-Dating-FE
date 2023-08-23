import { useQuery } from '@tanstack/react-query';
import axiosClient from 'apis/axiosClient';

const fetchChatRoom = async (roomId: number, userId: number) => {
  const { data } = await axiosClient.get(`api/chatroom/${roomId}`, { params: { userId } });
  return data;
};

export const useGetChatData = (roomId: number, userId: number) => {
  const { isLoading, data, isError } = useQuery(['chatroom'], () => fetchChatRoom(roomId, userId));
  return { isLoading, isError, data };
};
