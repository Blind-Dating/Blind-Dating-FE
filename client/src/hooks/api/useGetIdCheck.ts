import { useQuery } from '@tanstack/react-query';
import axiosClient from 'apis/axiosClient';

export const useGetIdCheck = (userId: string) => {
  return useQuery(['userIdCheck'], async () => {
    const { data } = await axiosClient.get(`api/check-userId/${userId}`);
    return data;
  });
};
