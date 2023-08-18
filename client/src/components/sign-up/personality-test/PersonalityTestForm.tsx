import { ProgressBar } from 'components/ui/ProgressBar';
import React from 'react';
import { QuestionField } from './QuestionField';
import { QUESTIONS } from 'assets/config';
import { SignUpAllValues } from 'pages/SignUpPage';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues | null>>;
};

const PersonalityTestForm = ({ onNext, setSignUpAllValues }: Props) => {
  return (
    <div className="w-full h-full">
      <header className="w-full">
        <ProgressBar width={3 / 4} />
        <h1 className="text-3xl font-bold pl-11 font-Lora">Profile details</h1>
      </header>

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        질문에 대한 답변은 상대방에게 내가 어떤 사람인지 알리는데 많은 도움이 됩니다.
      </p>

      <main className="mt-10 mb-[38px] px-7">
        <form className="flex flex-col items-center justify-center w-full ">
          <main className="space-y-8 h-[480px] overflow-y-auto">
            {QUESTIONS.map((question, index) => {
              return <QuestionField key={index} question={question} index={index + 1} />;
            })}
          </main>
          <button className="mt-10 btn-red"> Continue </button>
        </form>
      </main>
    </div>
  );
};

export default PersonalityTestForm;
