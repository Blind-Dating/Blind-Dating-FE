import { useMutation } from '@tanstack/react-query';
import axiosClient from 'axios';
import { LoginFormValues } from 'components/login/LoginForm';

const postLoginFetcher = async (loginInfo: LoginFormValues) => {
  const { data } = await axiosClient.post('api/login', loginInfo);
  return data;
};

export const usePostLogin = () => {
  const { mutate, isSuccess, isLoading, isError } = useMutation(postLoginFetcher);

  const postLoginFn = (loginInfo: LoginFormValues) => {
    mutate(loginInfo);
  };

  return {
    isSuccess,
    isLoading,
    isError,
    postLoginFn,
  };
};
