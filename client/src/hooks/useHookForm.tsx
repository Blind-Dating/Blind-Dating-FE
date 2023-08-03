import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

export default function useHookForm<T extends FieldValues>() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<T>();

  const onSubmit: SubmitHandler<T> = (data) => {
    console.log(data);
  };

  return { register, handleSubmit, errors, onSubmit, watch };
}
