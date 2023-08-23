import ChatMessageItem from './ChatMessageItem';

const ChatMessageDate = ({ date }: { date: string }) => {
  return (
    <li className="my-2">
      <div className="relative text-center">
        <hr className="absolute left-0 w-full border-t border-whiteLilac bottom-1/2" />
        <span className="relative z-10 p-2 text-xs bg-white text-labelColor">
          {date.slice(0, 12)}
        </span>
      </div>
    </li>
  );
};

type Props = {
  messages: { id: number; writerId: number; message: string; createdAt: string }[];
};

const ChatMessages = ({ messages }: Props) => {
  const messageDates: string[] = [];
  const dataWithDate = [];

  for (let i = 0; i < messages.length; i++) {
    const created = new Date(messages[i].createdAt).toLocaleString();
    if (messageDates[messageDates.length - 1] !== created.slice(0, 11)) {
      messageDates.push(created.slice(0, 11));
      dataWithDate.push(<ChatMessageDate key={messages[i].createdAt} date={created} />);
    }
    dataWithDate.push(
      <ChatMessageItem key={messages[i].id} user={3} {...messages[i]} createdAt={created} />
    );
  }

  return (
    <section className="px-10 py-2.5 flex-1 w-full max-h-[70%] overflow-auto ">
      <ul className="grid grid-cols-1 gap-2 ">{dataWithDate}</ul>
    </section>
  );
};

export default ChatMessages;
