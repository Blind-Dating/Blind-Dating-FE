const UserIntrodudction = ({ data }: { data: string }) => {
  return (
    <div>
      <textarea
        className="w-full h-24 p-3 text-sm border outline-none resize-none rounded-xl border-whiteLilac focus:border-labelColor "
        value={data}
      />
    </div>
  );
};

export default UserIntrodudction;
