import React, { useState } from 'react';
import InputField from 'components/sign-up/profile/InputField';
import { useHookForm } from 'hooks/useHookForm';
import { SubmitHandler } from 'react-hook-form';
import { SignUpAllValues } from 'pages/SignUpPage';
import { usePostCheckNickname } from 'hooks/api/usePostCheckNickname';
import { usePostCheckId } from 'hooks/api/usePostCheckId';
import { ReactComponent as Dot } from 'assets/icons/dot.svg';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues>>;
};

export type SignUpFormValues = {
  userId: string;
  nickname: string;
  userPassword: string;
  passwordCheck?: string;
};

export const ProfileForm = ({ onNext, setSignUpAllValues }: Props) => {
  const [isDuplicatedId, setIsDuplicatedId] = useState<boolean>(false);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState<boolean>(false);

  const { register, handleSubmit, errors, watch } = useHookForm<SignUpFormValues>();
  const { postCheckIdFn } = usePostCheckId(setIsDuplicatedId);
  const { postCheckNicknameFn } = usePostCheckNickname(setIsDuplicatedNickname);

  const userPassword = watch('userPassword');
  const userId = watch('userId');
  const userNickname = watch('nickname');

  const onSubmit: SubmitHandler<SignUpFormValues> = (signUpFormValues) => {
    if (!isDuplicatedId) return alert('아이디 중복체크를 해주세요');
    if (!isDuplicatedNickname) return alert('닉네임 중복체크를 해주세요');

    delete signUpFormValues.passwordCheck;

    setSignUpAllValues(signUpFormValues);
    onNext();
  };

  const handleCheckId = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postCheckIdFn(userId);
  };

  const handleNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    postCheckNicknameFn(userNickname);
  };

  return (
    <div className="flex flex-col">
      <header>
        <h1 className="mb-10 text-2xl font-bold font-Lora">Profile</h1>
      </header>

      <div className="dot-slide flex mb-10 mx-auto gap-1.5">
        <Dot opacity="10" />
        <Dot opacity="0.1" />
        <Dot opacity="0.1" />
      </div>

      <form className="flex flex-col max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex">
          <InputField
            className="input-md"
            type="text"
            label="아이디"
            id="userId"
            placeholder="id"
            autoFocus={true}
            error={errors.userId?.message}
            register={register}
            rules={{
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
            }}
          />
          <button
            className={`mt-6 ml-4 btn-check ${isDuplicatedId ? 'btn-checkSuccess' : ''}`}
            onClick={handleCheckId}
            disabled={!!errors?.userId}
          >
            {isDuplicatedId ? '확인' : '중복확인'}
          </button>
        </section>

        <section className="flex">
          <InputField
            className="input-md"
            type="text"
            id="nickname"
            label="닉네임"
            register={register}
            placeholder="nickname"
            error={errors.nickname?.message}
            rules={{
              required: '닉네임을 입력해주세요',
              maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
              minLength: {
                value: 3,
                message: '3글자 이상 입력해주세요',
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{3,20}$/,
                message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
              },
            }}
          />

          <button
            className={`mt-6 ml-4 btn-check ${isDuplicatedNickname ? 'btn-checkSuccess' : ''}`}
            onClick={handleNickname}
            disabled={!!errors?.nickname}
          >
            {isDuplicatedNickname ? '확인' : '중복확인'}
          </button>
        </section>

        <section>
          <InputField
            className="input-md"
            type="password"
            id="userPassword"
            label="비밀번호"
            placeholder="*****"
            error={errors.userPassword?.message}
            register={register}
            rules={{
              required: '아이디를 입력해주세요',
              maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
              minLength: {
                value: 8,
                message: '8글자 이상 입력해주세요',
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{8,20}$/,
                message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
              },
            }}
          />
        </section>

        <section>
          <InputField
            className="input-md"
            type="password"
            id="passwordCheck"
            label="비밀번호 확인"
            register={register}
            error={errors.passwordCheck?.message}
            placeholder="*****"
            rules={{
              required: '비밀번호를 다시 입력해주세요',
              validate: (passwordCheck) =>
                passwordCheck === userPassword || '비밀번호가 일치하지 않습니다',
            }}
          />
        </section>

        <button className="mt-20 btn-red" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};
