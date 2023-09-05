import { useNavigate } from 'react-router-dom';
import DeleteChatBtn from './DeleteChatBtn';
import { useRecoilValue } from 'recoil';
import { chatsSettingBtnState } from 'recoil/chat/atoms';

const ChatItem = ({ ...props }) => {
  const { otherUserNickname: user, updatedAt, roomId, recentMessage, unReadCount } = props;
  const navigate = useNavigate();
  const isClickedButton = useRecoilValue(chatsSettingBtnState);

  const updated = new Date(updatedAt).toLocaleDateString();

  return (
    <>
      <li className="flex">
        <button
          type="button"
          className="flex items-center w-full gap-4 text-left hover:cursor-pointer"
          onClick={() => {
            navigate(`/chat-list/${roomId}`);
          }}
        >
          <div className="flex items-center justify-center flex-none w-12 h-12 rounded-full bg-labelColor">
            {user ? user.slice(0, 1) : '?'}
          </div>
          <div className="flex-1 h-10 text-sm truncate ">
            <b>{user || '(알 수 없음)'}</b>
            <p className="mt-0.5">{recentMessage}</p>
          </div>
          <div className="flex flex-col items-end justify-between h-10">
            <span className="text-xs font-bold text-labelColor">{updated}</span>
            {unReadCount ? (
              <div className="h-4.5 py-0.5 px-1 rounded-full bg-redAmaranth">
                <span className="block text-xs text-whiteSmoke">{unReadCount}</span>
              </div>
            ) : (
              <div className="w-5 h-5" />
            )}
          </div>
        </button>
        {isClickedButton && <DeleteChatBtn roomId={roomId} />}
      </li>
      <hr className="border-labelColor" />
    </>
  );
};

export default ChatItem;
