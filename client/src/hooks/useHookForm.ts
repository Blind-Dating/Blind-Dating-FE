import { useForm, FieldValues } from 'react-hook-form';

export const useHookForm = <T extends FieldValues>() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<T>();

  return { register, handleSubmit, errors, watch };
};
