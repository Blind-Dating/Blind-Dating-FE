import { useMutation } from '@tanstack/react-query';
import axiosClient from 'apis/axios';

const postNameCheckFetcher = async (userName: string) => {
  const { data } = await axiosClient.post('api/signup', userName);
  return data;
};

const usePostCheckName = () => {
  const { mutate, isSuccess, isLoading, isError } = useMutation(postNameCheckFetcher);

  const postCheckNameFn = (userName: string) => {
    mutate(userName);
  };

  return { isSuccess, isLoading, isError, postCheckNameFn };
};

export default usePostCheckName;
