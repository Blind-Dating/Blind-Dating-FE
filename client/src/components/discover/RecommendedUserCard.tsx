import { QUESTIONS } from 'assets/config';
import { useModal } from 'hooks/useModal';
import { DetailField } from './DetailField';

type Interest = {
  id: number;
  interestName: string;
};

type Question = {
  id: number;
  status: boolean;
};

type Props = {
  id: number;
  userId: string;
  nickname: string;
  region: string;
  mbti: string;
  gender: string;
  interests: Interest[];
  questions: Question[];
  selfIntroduction: string;
};

export const RecommendedUserCard = (userInfo: Props) => {
  const { nickname, region, mbti, interests, questions, selfIntroduction } = userInfo;
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <main className="h-[30rem] w-80 rounded-xl border border-redAmaranth/90 bg-redAmaranth/90">
      {isModalOpen ? (
        <>
          <button onClick={handleToggleModal}>btn</button>
          <DetailField answer={questions} />
        </>
      ) : (
        <>
          <button onClick={handleToggleModal}>btn</button>

          <header className="w-full flex justify-between pt-10 px-8 mb-8">
            <div>
              <p className="text-xl font-Lora text-white font-bold">{nickname}</p>
              <p>
                <span className="text-sm text-white font-Lora ">#{region}</span>{' '}
                <span className="text-sm text-white font-Lora ">#{mbti}</span>
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-white shadow-2xl"></div>
          </header>

          <section className="flex flex-col gap-4 h-56 px-9 mb-12 w-full whitespace-normal ">
            <p className="font-Lora text-white text-base font-semibold ">about</p>
            <p className="font-Lora text-white text-base break-words font-medium">
              {selfIntroduction}
            </p>
          </section>

          <section className="px-10">
            <p className="font-Lora text-white text-base font-bold ">제 관심사는</p>
            {interests.map((interest) => {
              return (
                <span className="font-Lora text-white text-base font-bold " key={interest.id}>
                  {interest.interestName}{' '}
                </span>
              );
            })}
            <span className="font-Lora text-white text-base font-bold ">입니다.</span>
          </section>
        </>
      )}
    </main>
  );
};
