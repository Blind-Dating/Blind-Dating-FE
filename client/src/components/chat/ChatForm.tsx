import React, { useState } from 'react';

type Props = {
  onMessage: (message: string) => void;
  roomStatus: boolean;
};

const ChatForm = (props: Props) => {
  const { onMessage, roomStatus } = props;
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
        disabled={!roomStatus}
      />
    </section>
  );
};

export default ChatForm;
