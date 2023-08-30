import InterestItem from './InterestItem';

type Props = { data: { id: number; interestName: string }[] };

const UserInterests = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap h-16 gap-2">
      {data.map((item) => (
        <InterestItem key={item.id} name={item.interestName} />
      ))}
      <button
        type="button"
        className="flex block h-8 p-2 border rounded text-s text-redAmaranth border-whiteLilac"
      >
        Edit
      </button>
    </div>
  );
};

export default UserInterests;
