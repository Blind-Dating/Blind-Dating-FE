import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import axiosClient from 'apis/axiosClient';

type ApiResponse = {
  status: string;
  message: string;
  data: boolean;
};

const postIdCheckFetcher = async (userId: string): Promise<ApiResponse> => {
  const { data } = await axiosClient.post('api/check-userId', { userId: userId });
  return data;
};

export const usePostCheckId = (setIsDuplicated: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { mutate: postCheckIdFn, isLoading } = useMutation<ApiResponse, AxiosError, string>(
    postIdCheckFetcher,
    {
      onSuccess: (res) => {
        if (res.data) {
          setIsDuplicated(true);
          alert('사용 가능한 아이디입니다.');
        }
        if (!res.data) {
          setIsDuplicated(false);
          alert(res.message);
        }
      },
      onError: (error) => {
        alert(error.message);
      },
    }
  );

  return { postCheckIdFn, isLoading };
};
