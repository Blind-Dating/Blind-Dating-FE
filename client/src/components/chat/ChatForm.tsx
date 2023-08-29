import useHandleChat from 'hooks/useHandleChat';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user/atoms';

const ChatForm = () => {
  const { chatId } = useParams();
  const { id, nickname } = useRecoilValue(userState);
  const { sendHandler } = useHandleChat({ username: nickname, roomId: chatId, userId: id });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const content = {
        chatRoomId: chatId,
        writerId: id,
        message: target.value,
      };
      sendHandler(content);
    }
  };

  return (
    <section className="w-full max-h-[15%] px-10 py-8">
      <textarea
        className="w-full p-2 text-sm border rounded resize-none border-whiteLilac"
        placeholder="your message"
        onKeyDown={handleKeyDown}
      />
    </section>
  );
};

export default ChatForm;
