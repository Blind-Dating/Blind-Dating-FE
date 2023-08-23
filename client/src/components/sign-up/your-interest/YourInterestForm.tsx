import { Header } from 'components/layout/Header';
import { SignUpAllValues } from 'pages/SignUpPage';
import { InterestFields } from './InterestFields';
import React from 'react';
import { INTERESTINGS_CULTURE, INTERESTINGS_SPORTS } from 'assets/config';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues | null>>;
};

export const YourInterestForm = ({ onNext, setSignUpAllValues }: Props) => {
  return (
    <div className="w-full h-full">
      <Header progressWidth="1" title="Your interests" />

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        관심사 선택은 상대방에게 내가 어떤 관심사를 가진 사람인지 알리는데 많은 도움이 됩니다.
      </p>

      <main className="mt-10 mb-[38px] px-7">
        <form className="flex flex-col items-center justify-center w-full ">
          <main className="h-[480px] overflow-y-auto no-scrollbar">
            <InterestFields label="스포츠" interestings={INTERESTINGS_SPORTS} />
            <InterestFields label="문화 및 활동" interestings={INTERESTINGS_CULTURE} />
          </main>
          <button className="mt-16 btn-red">Continue</button>
        </form>
      </main>
    </div>
  );
};
