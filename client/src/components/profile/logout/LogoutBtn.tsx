import { usePostLogout } from 'hooks/api/usePostLogout';

const LogoutBtn = () => {
  const { mutate } = usePostLogout();
  return (
    <button
      type="button"
      className="w-24 h-12 p-3.5 border text-sm text-labelColor font-bold border-whiteSmoke rounded-xl hover:border-redAmaranth hover:text-redAmaranth"
      onClick={() => mutate()}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
