import { useNavigate } from 'react-router-dom';

interface Props {
  otherUserNickname: string;
  updatedAt: string;
  roomId: string;
  recentMessage: string;
}

const ChatItem = (props: Props) => {
  const { otherUserNickname: user, updatedAt, roomId, recentMessage } = props;
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
        <div className="flex-1 h-10 text-sm truncate ">
          <b>{user}</b>
          <p className="mt-0.5">{recentMessage}</p>
        </div>
        <div className="flex flex-col items-end justify-between h-10">
          <span className="text-xs font-bold text-labelColor">{updated}</span>
        </div>
      </li>
      <hr className="border-labelColor" />
    </>
  );
};

export default ChatItem;