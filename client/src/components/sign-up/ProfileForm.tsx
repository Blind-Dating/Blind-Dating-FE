import React from 'react';
import InputField from 'components/ui/InputField';
import { useHookForm } from 'hooks/useHookForm';
import { usePostCheckId } from 'hooks/api/usePostCheckId';
import { usePostSignUpData } from 'hooks/api/usePostSignUpData';
import { SubmitHandler } from 'react-hook-form';
import { UserInfo } from 'pages/SignUpPage';
import { usePostCheckNickname } from 'hooks/api/useGetNickNameCheck';

type ProfileFormProps = {
  onNext: () => void;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
};

export type SignUpFormValues = {
  userId: string;
  nickname: string;
  userPassword: string;
  passwordCheck?: string;
};
export const ProfileForm = ({ onNext, setUserInfo }: ProfileFormProps) => {
  const { register, handleSubmit, errors, watch } = useHookForm<SignUpFormValues>();
  const userPassword = watch('userPassword');
  const userId = watch('userId');
  const nickname = watch('nickname');

  const { postCheckIdFn } = usePostCheckId();
  const { postCheckNicknameFn } = usePostCheckNickname();

  const onSubmit: SubmitHandler<SignUpFormValues> = (userData) => {
    setUserInfo(userData);
    onNext();
  };

  const handleCheckIdClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postCheckIdFn(userId);
  };
  const handleNickNameClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postCheckNicknameFn(nickname);
  };

  return (
    <div className="flex flex-col">
      <header>
        <h1 className="mb-10 text-2xl font-bold font-Lora">Profile</h1>
      </header>

      <div className="dot-slide"></div>

      <form className="flex flex-col max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <InputField
            className="input-md"
            type="text"
            label="아이디"
            id="userId"
            placeholder="아이디"
            autoFocus={true}
            error={errors.userId?.message}
            register={register}
            {...register('userId', {
              required: '아이디를 입력해주세요',
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
          <button className="mt-6 ml-4 btn-check" onClick={handleCheckIdClick}>
            중복확인
          </button>
        </div>

        <div className="flex">
          <InputField
            className="input-md"
            type="text"
            id="nickname"
            label="닉네임"
            register={register}
            placeholder="닉네임"
            error={errors.nickname?.message}
            {...register('nickname', {
              required: '닉네임을 입력해주세요',
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

          <button className="mt-6 ml-4 btn-check" onClick={handleNickNameClick}>
            중복확인
          </button>
        </div>
        <InputField
          className="input-md"
          type="password"
          id="userPassword"
          label="비밀번호"
          placeholder="*****"
          error={errors.userPassword?.message}
          register={register}
          {...register('userPassword', {
            required: '비밀번호를 입력해주세요',
            minLength: { value: 5, message: '5글자 이상 입력해주세요' },
            maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
            pattern: {
              value: /^[A-za-z0-9가-힣]{5,20}$/,
              message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
            },
          })}
        />

        <InputField
          className="input-md"
          type="password"
          id="passwordCheck"
          label="비밀번호 확인"
          register={register}
          error={errors.passwordCheck?.message}
          placeholder="*****"
          {...register('passwordCheck', {
            required: '비밀번호를 다시 입력해주세요',
            validate: (passwordCheck) =>
              passwordCheck === userPassword || '비밀번호가 일치하지 않습니다',
          })}
        />

        <button className="mt-20 btn-red" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};
