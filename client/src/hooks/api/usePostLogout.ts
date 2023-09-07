import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';
import { AxiosError } from 'axios';

type ApiResponse = {
  status: string;
  message: string;
  data: boolean;
};

const postLogout = async (): Promise<ApiResponse> => await axiosWithAuth.post('/api/logout');

export const usePostLogout = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation<ApiResponse, AxiosError>(postLogout, {
    onSuccess: () => {
      queryClient.removeQueries();
    },
    onError: (err: Error) => {
      alert(err.message);
    },
  });

  return { mutate };
};
