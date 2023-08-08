import { usePostLogin } from 'hooks/api/usePostLogin';
import React, { FormEvent, useState } from 'react';

export type LoginFormValues = {
  userId: string;
  userPassword: string | number;
};

export const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<LoginFormValues>({ userId: '', userPassword: '' });
  const { postLoginFn } = usePostLogin();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postLoginFn(loginInfo);
  };
  return (
    <>
      <form
        className="mt-[44px] flex flex-col justify-center items-center gap-3"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-whiteSmoke rounded-2xl w-[295px] h-14 text-center font-NotoSans placeholder:italic focus:border-redAmaranth focus:outline-none"
          type="text"
          placeholder="Id"
          value={loginInfo.userId}
          onChange={(event) =>
            setLoginInfo((prev) => ({
              ...prev,
              userId: event.target.value,
            }))
          }
        />
        <input
          className="border border-whiteSmoke rounded-2xl w-[295px] h-14 text-center font-NotoSans  placeholder:italic focus:border-redAmaranth focus:outline-none"
          type="password"
          placeholder="Password"
          value={loginInfo.userPassword}
          onChange={(event) =>
            setLoginInfo((prev) => ({
              ...prev,
              userPassword: event.target.value,
            }))
          }
        />
        <button
          type="submit"
          className=" hover:shadow-xl transition duration-300 px-8 py-4 mt-3 text-base font-bold text-center rounded-2xl w-[295px] h-14 font-NotoSans text-whiteSmoke bg-redAmaranth"
        >
          Login
        </button>
      </form>
    </>
  );
};
