import useHandleChat from 'hooks/useHandleChat';
import React from 'react';

const ChatForm = () => {
  const { sendHandler } = useHandleChat();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const content = {
        chatRoomId: 1,
        writerId: 3,
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
