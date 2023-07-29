import useHookForm from 'hooks/useHookForm';

function SignUp() {
  const { register, handleSubmit, errors, onSubmit } = useHookForm();

  return (
    <>
      <form className="flex flex-col max-w-sm space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userId">ID</label>
        <input
          type="text"
          id="userId"
          {...register('userId', {
            required: 'This field is required',
            maxLength: { value: 20, message: 'Password must be at least 20 characters long' },
          })}
        />
        {errors.userId && <p>{errors.userId.message}</p>}
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          {...register('password', {
            required: 'This field is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters long' },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">button</button>
      </form>
    </>
  );
}

export default SignUp;
