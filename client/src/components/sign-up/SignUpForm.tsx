import InputField from 'components/ui/InputField';
import useHookForm from 'hooks/useHookForm';

export type SignUpFormValues = {
  userId: string;
  userPassword: string | number;
  passwordCheck: string | number;
  nickname: string;
  region: string;
};

export default function SignUpForm() {
  const { register, handleSubmit, errors, onSubmit, watch } = useHookForm<SignUpFormValues>();
  const userPassword = watch('userPassword');

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          className="input-container"
          type="text"
          label="ID"
          id="userId"
          placeholder="아이디를 입력해주세요"
          error={errors.userId?.message}
          register={register}
          {...register('userId', {
            required: 'This field is required',
            maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
            minLength: {
              value: 5,
              message: '5글자 이상 입력해주세요',
            },
            pattern: {
              value: /^[A-za-z0-9가-힣]{5,20}$/,
              message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
            },
          })}
        />

        <InputField
          className="input-container"
          type="password"
          id="userPassword"
          label="Password"
          placeholder="*****"
          error={errors.userPassword?.message}
          register={register}
          {...register('userPassword', {
            required: 'This field is required',
            minLength: { value: 5, message: '5글자 이상 입력해주세요' },
            maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
            pattern: {
              value: /^[A-za-z0-9가-힣]{5,20}$/,
              message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
            },
          })}
        />

        <InputField
          className="input-container"
          type="password"
          id="passwordCheck"
          label="Password Check"
          register={register}
          error={errors.passwordCheck?.message}
          placeholder="*****"
          {...register('passwordCheck', {
            validate: (passwordCheck) =>
              passwordCheck === userPassword || '비밀번호가 일치하지 않습니다',
          })}
        />

        <InputField
          className="input-container"
          type="text"
          id="nickname"
          label="Nickname"
          register={register}
          placeholder="nickname"
          error={errors.nickname?.message}
          {...register('nickname', {
            required: 'This field is required',
            maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
            minLength: {
              value: 3,
              message: '3글자 이상 입력해주세',
            },
            pattern: {
              value: /^[A-za-z0-9가-힣]{3,20}$/,
              message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
            },
          })}
        />

        <label htmlFor="region">Region</label>
        <input
          className="input-container"
          type="checkbox"
          id="region"
          {...register('region', {
            required: 'This field is required',
            maxLength: { value: 20, message: 'Password must be at least 20 characters long' },
          })}
        />
        {errors.nickname && <p>{errors.nickname.message}</p>}

        <button className="input-container" type="submit">
          button
        </button>
      </form>
    </div>
  );
}
