import { useMutation } from '@tanstack/react-query';
import axiosClient from 'apis/axiosClient';
import { SignUpAllValues } from 'pages/SignUpPage';

const postSignUpFetcher = async (userData: SignUpAllValues) => {
  const { data } = await axiosClient.post('api/signup', userData);
  return data;
};

export const usePostSignUpData = () => {
  const {
    mutate: postSignUpDataFn,
    isSuccess,
    isLoading,
    isError,
  } = useMutation(postSignUpFetcher);

  return {
    isSuccess,
    isLoading,
    isError,
    postSignUpDataFn,
  };
};
