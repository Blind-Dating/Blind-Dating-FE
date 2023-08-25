import { useMutation } from '@tanstack/react-query';
import { axiosClient, axiosWithAuth } from 'apis/axiosClient';
import { SignUpAllValues } from 'pages/SignUpPage';
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

const postSignUpFetcher = async (userData: SignUpAllValues): Promise<ApiResponse> => {
  const { data } = await axiosClient.post<ApiResponse>('api/signup', userData);
  return data;
};

export const usePostSignUpData = () => {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);

  const { mutate: postSignUpDataFn, isLoading } = useMutation<ApiResponse, Error, SignUpAllValues>(
    postSignUpFetcher,
    {
      onSuccess: (res) => {
        setUserState({ token: res.data.accessToken, id: res.data.id, nickname: res.data.nickname });
        axiosWithAuth.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
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
    postSignUpDataFn,
  };
};
