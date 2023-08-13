import React, { useState } from 'react';
import { ReactComponent as Dot } from '/public/icons/dot.svg';

type CheckFormValues = {
  gender: string;
  region: string;
  score: number;
  mbti: string;
};

export const ProfileDetailsForm = () => {
  const [clickValues, setClickValues] = useState<CheckFormValues>({
    gender: '',
    region: '',
    score: 0,
    mbti: '',
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    setClickValues((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  return (
    <div className="flex flex-col ">
      <header>
        <h1 className="mb-10 text-2xl font-bold font-Lora">Profile details</h1>
      </header>

      <div className="dot-slide flex mb-10 mx-auto gap-1.5">
        <Dot opacity="0.1" />
        <Dot opacity="10" />
        <Dot opacity="0.1" />
      </div>

      <form className="flex flex-col max-w-sm">
        <main className="flex flex-col overflow-auto max-h-[350px] gap-4">
          <section className="flex flex-col gap-1">
            <label className="pl-2 label" htmlFor="성별">
              성별
            </label>
            <div className="space-x-2">
              <button type="button" value="남성" className="tag" onClick={handleClick}>
                남성
              </button>
              <span className="tag">여성</span>
            </div>
          </section>

          <section className="flex flex-col gap-1">
            <label className="pl-2 label" htmlFor="지역">
              지역
            </label>
            <div className="space-x-2">
              <button type="button" name="남성" className="tag">
                보기
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-1">
            <label className="pl-2 label" htmlFor="MBTI">
              MBTI
            </label>
            <div className="space-x-2">
              <button type="button" name="MBTI" className="tag">
                보기
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-1">
            <label className="pl-2 label" htmlFor="성격 테스트">
              성격 테스트
            </label>
            <div className="space-x-2">
              <button type="button" name="성격 테스트" className="tag">
                보기
              </button>
            </div>
          </section>
        </main>

        <button className="mt-24 btn-red" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};
