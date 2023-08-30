type Props = {
  data: string;
};

const UserLocationMBTI = ({ data }: Props) => {
  return (
    <button
      type="button"
      className="flex items-center justify-between block w-full h-12 px-4 text-sm border rounded-xl border-whiteLilac"
    >
      <div>{data}</div>
      <div>{`>`}</div>
    </button>
  );
};

export default UserLocationMBTI;
