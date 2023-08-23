import { Header } from 'components/layout/Header';
import React from 'react';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues | null>>;
};

export const IntroductionForm = ({ onNext, setSignUpAllValues }: Props) => {
  return (
    <div className="w-full h-full">
      <Header progressWidth="1" title="Introduction" />

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        자기소개를 자세히 적어주시면, 타 유저가 자신이 어떤 사람인지 파악하는데 많은 도움이 됩니다.
      </p>

      <main className="mt-10 mb-[38px] px-7">
        <form className="flex flex-col items-center justify-center w-full">
          <main className=" w-full space-y-10 h-[480px] overflow-y-auto no-scrollbar">
            <textarea
              className="w-full h-full p-3 text-sm border rounded-lg outline-none resize-none font-NotoSans border-whiteLilac focus:border-black/25 focus:rounded-lg"
              placeholder="자기 소개를 적어주세요"
              id=""
              cols={10}
              rows={10}
              required
              maxLength={300}
              autoFocus
            />
          </main>
          <button className="mt-16 btn-red">Continue</button>
        </form>
      </main>
    </div>
  );
};
