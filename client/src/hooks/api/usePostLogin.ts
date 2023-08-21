import { useMutation } from '@tanstack/react-query';
import { LoginFormValues } from 'components/login/LoginForm';
import axiosClient from 'apis/axiosClient';
import { useNavigate } from 'react-router-dom';

type Token = {
  accessToken: string;
  refreshToken: string;
};

type LoginResponse = {
  data: {
    token: Token;
    nickname: string;
  };
};

const postLoginFetcher = async (loginInfo: LoginFormValues): Promise<LoginResponse> => {
  const { data } = await axiosClient.post<LoginResponse>('api/login', loginInfo);
  return data;
};

export const usePostLogin = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation<LoginResponse, Error, LoginFormValues>(
    postLoginFetcher,
    {
      onSuccess: ({ data }) => {
        // localStorage 임시저장
        localStorage.setItem('token', JSON.stringify(data.token.accessToken));
        navigate('/discover');
      },
      onError: () => {
        alert('Login Error');
      },
    }
  );

  const postLoginFn = (loginInfo: LoginFormValues) => {
    mutate(loginInfo);
  };

  return {
    isLoading,
    postLoginFn,
  };
};
