import useHandleChat from 'hooks/useHandleChat';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user/atoms';

const ChatForm = () => {
  const { chatId } = useParams();
  const { userId } = useRecoilValue(userState);
  const { sendHandler } = useHandleChat();
  const [value, setValue] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const content = {
        chatRoomId: chatId,
        writerId: userId,
        message: target.value,
      };
      sendHandler(content);
      setValue('');
    }
  };

  return (
    <section className="w-full max-h-[15%] px-10 py-8">
      <textarea
        className="w-full p-2 text-sm border rounded resize-none border-whiteLilac"
        placeholder="your message"
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </section>
  );
};

export default ChatForm;
