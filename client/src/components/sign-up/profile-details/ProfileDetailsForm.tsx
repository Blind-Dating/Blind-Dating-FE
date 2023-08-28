import React, { useState } from 'react';
import { MoreModal } from './MoreModal';
import { MBTIS, REGIONS } from 'assets/config';
import { SignUpAllValues } from 'pages/SignUpPage';
import { Header } from 'components/layout/Header';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues>>;
};

export type CheckFormValues = {
  gender: string;
  region: string;
  mbti: string;
};

export const ProfileDetailsForm = ({ onNext, setSignUpAllValues }: Props) => {
  const [collectValues, setCollectValues] = useState<CheckFormValues>({
    gender: '',
    region: '',
    mbti: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpAllValues((prev) => ({ ...prev, ...collectValues }));
    onNext();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget;

    setCollectValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full h-full">
      <Header progressWidth="2/5" title="Profile details" />

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        닉네임은 타 유저에게 보이는 이름으로 사용됩니다
      </p>

      <main className="mt-10 px-9">
        <form className="flex flex-col items-start justify-between w-full" onSubmit={handleSubmit}>
          <main className="h-[480px] space-y-5">
            <section className="flex flex-col gap-1">
              <label className="pl-2 label" htmlFor="성별">
                성별
              </label>
              <div className="space-x-2">
                <button
                  type="button"
                  name="gender"
                  value="남성"
                  className={`${collectValues?.gender === '남성' ? 'tag-selected' : 'tag'}`}
                  onClick={handleClick}
                >
                  남성
                </button>
                <button
                  type="button"
                  name="gender"
                  value="여성"
                  className={`${collectValues?.gender === '여성' ? 'tag-selected' : 'tag'}`}
                  onClick={handleClick}
                >
                  여성
                </button>
              </div>
            </section>

            <section className="flex flex-col gap-1">
              <label className="pl-2 label" htmlFor="지역">
                지역
              </label>
              <div className="space-x-2">
                <MoreModal
                  name="region"
                  tags={REGIONS}
                  title="지역"
                  setCollectValues={setCollectValues}
                />
                {collectValues?.region && (
                  <span className="tag-selected">{collectValues.region}</span>
                )}
              </div>
            </section>

            <section className="flex flex-col gap-1">
              <label className="pl-2 label" htmlFor="MBTI">
                MBTI
              </label>
              <div className="space-x-2">
                <MoreModal
                  name="mbti"
                  tags={MBTIS}
                  title="MBTI"
                  setCollectValues={setCollectValues}
                />
                {collectValues?.mbti && <span className="tag-selected">{collectValues.mbti}</span>}
              </div>
            </section>
          </main>

          <button
            className="mt-14 btn-red"
            type="submit"
            disabled={!collectValues.gender || !collectValues.region || !collectValues.mbti}
          >
            Continue
          </button>
        </form>
      </main>
    </div>
  );
};
