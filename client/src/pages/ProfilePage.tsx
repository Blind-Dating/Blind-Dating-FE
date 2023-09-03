import Layout from 'components/layout/Layout';
import UserDetailFields from 'components/profile/detail/DetailFields';
import UserInfo from 'components/profile/UserInfo';
import UserInfoEditBtn from 'components/profile/UserInfoEditBtn';
import { useGetProfile } from 'hooks/api/useGetProfile';

const ProfilePage = () => {
  const { data, isError, isLoading } = useGetProfile();

  if (isError || isLoading) {
    return (
      <Layout title="My Page">
        <></>
      </Layout>
    );
  }

  return (
    <Layout title="My Page">
      <UserInfo nickname={data.nickname} id={data.userId} />
      <UserDetailFields
        interests={data.interests}
        introduction={data.selfIntroduction}
        region={data.region}
        mbti={data.mbti}
      />
      <UserInfoEditBtn />
    </Layout>
  );
};

export default ProfilePage;
