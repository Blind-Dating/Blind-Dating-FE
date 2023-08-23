import { ReactComponent as More } from 'assets/icons/more.svg';

type Props = { name: string };

const ChatUser = (props: Props) => {
  const { name } = props;
  return (
    <section className="flex items-center w-full gap-2 px-10 py-8 max-h-[15%]">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-labelColor">
        {name.slice(0, 1)}
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-xl font-bold font-Lora">{name}</h2>
        {/* <b className="mx-1 text-xs text-labelColor">{status}</b> */}
      </div>
      <button
        type="button"
        className="w-12 h-12 p-3 border text-redAmaranth border-whiteSmoke rounded-xl"
      >
        <More />
      </button>
    </section>
  );
};

export default ChatUser;
