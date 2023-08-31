import React, { useState } from 'react';

const ChatForm = ({ onMessage }: { onMessage: (message: string) => void }) => {
  const [value, setValue] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      onMessage(target.value);
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
