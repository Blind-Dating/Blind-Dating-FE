type Props = { nickname: string; id: number };

const UserInfo = (props: Props) => {
  const { nickname, id } = props;
  return (
    <section className="flex gap-4 mx-12">
      <div className="flex items-center justify-center flex-none w-20 h-20 pt-2 text-2xl font-bold text-white rounded-full bg-grayLignt">
        {nickname.slice(0, 1)}
      </div>
      <div className="font-Lora">
        <h2 className="text-2xl font-bold text-redAmaranth">{nickname}</h2>
        <div className="px-2 mt-[-4px] ">{id}</div>
      </div>
    </section>
  );
};

export default UserInfo;
