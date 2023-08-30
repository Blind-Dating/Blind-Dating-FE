import Layout from 'components/layout/Layout';
import UserDetailFields from 'components/profile/detail/DetailFields';
import UserInfo from 'components/profile/UserInfo';
import UserInfoEditBtn from 'components/profile/UserInfoEditBtn';

const ProfilePage = () => {
  const user = {
    userId: '1',
    nickname: 'nickname',
    region: '경상북도',
    mbti: 'ISTP',
    gender: 'M',
    interests: [
      {
        id: 0,
        interestName: '축구',
      },
      {
        id: 1,
        interestName: '야구',
      },
      {
        id: 2,
        interestName: '농구',
      },
    ],
    questions: [
      {
        id: 1,
        status: true,
      },
      {
        id: 2,
        status: true,
      },
      {
        id: 3,
        status: false,
      },
      {
        id: 4,
        status: true,
      },
    ],
    selfIntroduction:
      '자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개',
  };
  return (
    <Layout title="My Page">
      <UserInfo nickname={user.nickname} id={'qwe123'} />
      <UserDetailFields
        interests={user.interests}
        introduction={user.selfIntroduction}
        region={user.region}
        mbti={user.mbti}
      />
      <UserInfoEditBtn />
    </Layout>
  );
};

export default ProfilePage;
