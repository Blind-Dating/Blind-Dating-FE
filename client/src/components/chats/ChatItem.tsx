import { useNavigate } from 'react-router-dom';

interface Props {
  otherUserNickname: string;
  updatedAt: string;
  roomId: string;
}

const ChatItem = (props: Props) => {
  const { otherUserNickname: user, updatedAt, roomId } = props;
  const navigate = useNavigate();

  const updated = new Date(updatedAt).toLocaleDateString();

  return (
    <>
      <li
        className="flex items-center gap-4 hover:cursor-pointer"
        onClick={() => {
          navigate(`/chats/${roomId}`);
        }}
      >
        <div className="flex items-center justify-center flex-none w-12 h-12 rounded-full bg-labelColor">
          {user.slice(0, 1)}
        </div>
        <div className="flex-1 text-sm">
          <b>{user}</b>
          <p>{'최근 메세지가 보이는 곳...'}</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <span className="text-xs font-bold text-labelColor">{updated}</span>
        </div>
      </li>
      <hr className="border-labelColor" />
    </>
  );
};

export default ChatItem;
