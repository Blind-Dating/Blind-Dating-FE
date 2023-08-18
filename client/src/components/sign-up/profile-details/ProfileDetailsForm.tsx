import React, { useState } from 'react';
import { ReactComponent as Dot } from 'assets/icons/dot.svg';
import { MoreModal } from './MoreModal';
import { MBTIS, INTERESTINGS, REGIONS } from 'assets/config';
import { SignUpAllValues } from 'pages/SignUpPage';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues | null>>;
};

export type CheckFormValues = {
  gender: string;
  region: string;
  mbti: string;
  interests: string[];
};

export const ProfileDetailsForm = ({ onNext, setSignUpAllValues }: Props) => {
  const [collectValues, setCollectValues] = useState<CheckFormValues>({
    gender: '',
    region: '',
    mbti: '',
    interests: [],
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
    <div className="flex flex-col ">
      <header>
        <h1 className="mb-10 text-2xl font-bold font-Lora">Profile details</h1>
      </header>

      <div className="dot-slide flex mb-10 mx-auto gap-1.5">
        <Dot opacity="0.1" />
        <Dot opacity="10" />
        <Dot opacity="0.1" />
      </div>

      <form className="flex flex-col max-w-sm" onSubmit={handleSubmit}>
        <main className="flex flex-col gap-5 ">
          <section className="flex flex-col gap-1">
            <label className="pl-2 label" htmlFor="성별">
              성별
            </label>
            <div className="space-x-2">
              <button
                type="button"
                name="gender"
                value="남성"
                className={`${collectValues?.gender === '남성' ? 'tag-clicked' : 'tag'}`}
                onClick={handleClick}
              >
                남성
              </button>
              <button
                type="button"
                name="gender"
                value="여성"
                className={`${collectValues?.gender === '여성' ? 'tag-clicked' : 'tag'}`}
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
              {collectValues?.region && <span className="tag-clicked">{collectValues.region}</span>}
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
              {collectValues?.mbti && <span className="tag-clicked">{collectValues.mbti}</span>}
            </div>
          </section>

          <section className="flex flex-col gap-1">
            <label className="pl-2 label" htmlFor="관심사">
              관심사
            </label>
            <div className="mb-5 space-x-2">
              <MoreModal
                name="interests"
                tags={INTERESTINGS}
                title="관심사"
                setCollectValues={setCollectValues}
                selectableCount={3}
              />
            </div>

            <div className="space-x-2">
              {collectValues?.interests.length === 3 &&
                collectValues.interests.map((value) => {
                  return (
                    <span key={value} className="tag-clicked">
                      {value}
                    </span>
                  );
                })}
            </div>
          </section>
        </main>

        <button
          className="mt-24 btn-red"
          type="submit"
          disabled={
            !collectValues.gender ||
            !collectValues.region ||
            !collectValues.mbti ||
            collectValues.interests.length < 3
          }
        >
          Continue
        </button>
      </form>
    </div>
  );
};
