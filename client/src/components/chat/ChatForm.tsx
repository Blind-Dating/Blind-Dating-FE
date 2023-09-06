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
      if (!value.length) {
        return;
      }
      const target = e.target as HTMLTextAreaElement;
      onMessage(target.value);
      setValue('');
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onMessage(value);
    setValue('');
  };

  return (
    <section className="w-full max-h-[15%] px-10 py-8">
      <form className="flex gap-2">
        <textarea
          className="w-full p-2 text-sm border rounded resize-none border-whiteLilac focus:outline-redAmaranth/70"
          placeholder="your message"
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!roomStatus}
        />
        <button
          type="button"
          className="flex-none px-3 text-white rounded text-s disabled:bg-whiteLilac bg-redAmaranth"
          onClick={handleClick}
          disabled={!value.length}
        >
          전송
        </button>
      </form>
    </section>
  );
};

export default ChatForm;
