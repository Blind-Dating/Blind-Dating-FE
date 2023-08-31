import { ReactComponent as Trash } from 'assets/icons/trash.svg';
import useHandleChatList from 'hooks/useHandleChatList';

const DeleteChatBtn = ({ roomId }: { roomId: string }) => {
  const { exitHandler } = useHandleChatList();
  const handler = (e: React.MouseEvent) => {
    e.preventDefault();
    exitHandler(roomId);
  };
  return (
    <button type="button" className="w-8 h-12 pl-2 text-redAmaranth " onClick={handler}>
      <Trash />
    </button>
  );
};

export default DeleteChatBtn;
