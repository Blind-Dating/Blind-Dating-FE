import UserInterests from './Interests/InterestsList';
import UserIntrodudction from './Introduction';
import UserLocationMBTI from './LocationMBTI';

type Props = {
  interests: { id: number; interestName: string }[];
  introduction: string;
  region: string;
  mbti: string;
};

type DetailInfo = {
  title: '지역' | 'MBTI' | '관심사' | '자기소개';
  position: 'right' | 'bottom';
  content: React.ReactNode;
};

const UserDetailFields = (props: Props) => {
  const { interests, introduction, region, mbti } = props;

  const detailInfo: DetailInfo[] = [
    { title: '지역', position: 'right', content: <UserLocationMBTI data={region} /> },
    { title: 'MBTI', position: 'right', content: <UserLocationMBTI data={mbti} /> },
    { title: '관심사', position: 'bottom', content: <UserInterests data={interests} /> },
    { title: '자기소개', position: 'bottom', content: <UserIntrodudction data={introduction} /> },
  ];

  return (
    <section className="flex flex-col gap-6 px-8 py-6">
      {detailInfo.map((field) => (
        <div
          key={field.title}
          className={`flex ${
            field.position === 'bottom' ? 'flex-col gap-2' : 'justify-between items-center'
          }`}
        >
          <label className="w-20 text-s text-labelColor">{field.title}</label>
          {field.content}
        </div>
      ))}
    </section>
  );
};

export default UserDetailFields;
