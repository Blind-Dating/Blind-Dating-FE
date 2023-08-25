import { useMutation } from '@tanstack/react-query';
import { axiosClient } from 'apis/axiosClient';
import { LoginFormValues } from 'components/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userState } from 'recoil/user/atoms';

type ApiResponse = {
  message: string;
  status: string;
  data: {
    accessToken: string;
    id: number;
    nickname: string;
  };
};

const postLoginFetcher = async (loginInfo: LoginFormValues): Promise<ApiResponse> => {
  const { data } = await axiosClient.post<ApiResponse>('api/login', loginInfo);
  return data;
};

export const usePostLogin = () => {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);

  const { mutate: postLoginFn, isLoading } = useMutation<ApiResponse, Error, LoginFormValues>(
    postLoginFetcher,
    {
      onSuccess: (res) => {
        setUserState({ token: res.data.accessToken, id: res.data.id, nickname: res.data.nickname });
        navigate('/discover');
        alert(res.message);
      },
      onError: (res) => {
        alert(res.message);
      },
    }
  );

  return {
    isLoading,
    postLoginFn,
  };
};
