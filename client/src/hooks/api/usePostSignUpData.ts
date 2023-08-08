import { useMutation } from '@tanstack/react-query';
import axiosClient from 'axios';
import { SignUpFormValues } from 'components/sign-up/ProfileForm';

const postSignUpFetcher = async (userData: SignUpFormValues) => {
  const { data } = await axiosClient.post('api/signup', userData);
  return data;
};

export const usePostSignUpData = () => {
  const { mutate, isSuccess, isLoading, isError } = useMutation(postSignUpFetcher);

  const postSignUpDataFn = (userData: SignUpFormValues) => {
    mutate(userData);
  };

  return {
    isSuccess,
    isLoading,
    isError,
    postSignUpDataFn,
  };
};
