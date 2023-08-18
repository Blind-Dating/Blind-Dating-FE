import React from 'react';

const ChatForm = () => {
  return (
    <section className="w-full max-h-[15%] px-10 py-8">
      <textarea
        className="w-full p-2 text-sm border rounded resize-none border-whiteLilac"
        placeholder="your message"
      />
    </section>
  );
};

export default ChatForm;
