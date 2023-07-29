import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  [name: string]: string | number;
};

export default function useHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return { register, handleSubmit, errors, onSubmit };
}
