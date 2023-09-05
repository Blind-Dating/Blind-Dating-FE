import { ReactComponent as Trash } from 'assets/icons/trash.svg';

const DeleteChatBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button type="button" className="w-8 h-12 pl-2 text-redAmaranth " onClick={onClick}>
      <Trash />
    </button>
  );
};

export default DeleteChatBtn;
