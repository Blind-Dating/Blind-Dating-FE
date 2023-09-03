import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

const fetchProfileData = async () => {
  const { data } = await axiosWithAuth.get(`api/user`);
  return data.data;
};

export const useGetProfile = () => {
  const { isError, isLoading, data } = useQuery(['profile'], fetchProfileData);
  return { isError, isLoading, data };
};
