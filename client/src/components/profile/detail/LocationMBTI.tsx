import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';

type Props = {
  data: string;
  onToggleModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClick: (name: string) => void;
  name: string;
};

const UserLocationMBTI = (props: Props) => {
  const { name, data, onClick, onToggleModal } = props;
  return (
    <button
      type="button"
      className="flex items-center justify-between block w-full h-12 px-4 text-sm border rounded-xl border-whiteLilac"
      onClick={(e) => {
        onToggleModal(e);
        onClick(name);
      }}
    >
      <div>{data}</div>
      <div className="text-labelColor">
        <ChevronRight />
      </div>
    </button>
  );
};

export default UserLocationMBTI;
