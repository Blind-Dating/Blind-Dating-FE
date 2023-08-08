import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { Link } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { LoginForm } from 'components/login/LoginForm';

function LoginPage() {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <NoHeaderFooterLayout>
      <h1 className="font-Lobster text-8xl text-redAmaranth ">blind</h1>

      {isModalOpen ? (
        <LoginForm />
      ) : (
        <>
          <Link className="mt-32 text-lg font-bold font-Lora " to="/signup">
            Sign up to continue
          </Link>

          <button
            onClick={toggleModal}
            className="hover:shadow-xl transition duration-300 px-8 py-4 mt-6 text-base font-bold text-center rounded-2xl w-[295px] h-14 font-NotoSans text-whiteSmoke bg-redAmaranth"
          >
            Login
          </button>
        </>
      )}

      <div className="border-t border-labelColor w-[300px] mt-16"></div>

      <section className="flex gap-5 mt-8">
        <div className="w-16 h-16 border border-whiteSmoke rounded-2xl"></div>
        <div className="w-16 h-16 border border-whiteSmoke rounded-2xl"></div>
        <div className="w-16 h-16 border border-whiteSmoke rounded-2xl"></div>
      </section>
    </NoHeaderFooterLayout>
  );
}

export default LoginPage;
