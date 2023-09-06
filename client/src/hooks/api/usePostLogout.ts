import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

const postLogout = async () => await axiosWithAuth.post('/api/logout');

export const usePostLogout = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(postLogout, {
    onSuccess: () => {
      queryClient.removeQueries();
    },
    onError: (err: Error) => {
      alert(err.message);
    },
  });

  return { mutate };
};
