type Props = {
  user: string | number;
  id: number;
  message: string;
  writerId: number;
  createdAt: string;
};

const ChatMessageItem = (props: Props) => {
  const { message, writerId, user, createdAt } = props;
  return (
    <li
      className={`flex flex-col font-Lora max-w-[80%] ${
        writerId === user ? 'justify-self-end ' : 'justify-self-start'
      }`}
    >
      <p
        className={`p-4 text-sm rounded-lg break-all ${
          writerId === user ? 'bg-whiteSmoke rounded-br-none' : 'bg-redAmaranth/10 rounded-bl-none'
        }`}
      >
        {message}
      </p>
      <span className={`text-xs text-labelColor ${writerId === user ? 'text-right' : ''}`}>
        {createdAt.slice(-11, -3)}
      </span>
    </li>
  );
};

export default ChatMessageItem;
