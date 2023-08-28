import { ReactComponent as Trash } from 'assets/icons/trash.svg';

const DeleteChatBtn = () => {
  const handler = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <button type="button" className="w-8 h-12 pl-2 text-redAmaranth " onClick={handler}>
      <Trash />
    </button>
  );
};

export default DeleteChatBtn;
