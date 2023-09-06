import { ReactComponent as Setting } from 'assets/icons/setting-config.svg';
import { useSetRecoilState } from 'recoil';
import { chatsSettingBtnState } from 'recoil/chat/atoms';

const ChatSettingBtn = () => {
  const setIsClicked = useSetRecoilState(chatsSettingBtnState);

  return (
    <button
      type="button"
      className="w-12 h-12 p-3.5 border text-redAmaranth border-whiteSmoke rounded-xl hover:border-redAmaranth"
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <Setting />
    </button>
  );
};

export default ChatSettingBtn;
