import Layout from 'components/layout/Layout';
import UserDetailFields from 'components/profile/detail/DetailFields';
import UserInfo from 'components/profile/UserInfo';
import UserInfoEditBtn from 'components/profile/UserInfoEditBtn';
import { useGetProfile } from 'hooks/api/useGetProfile';
import { usePostEditProfile } from 'hooks/api/usePostEditProfile';
import { useState } from 'react';

export type UserInfo = {
  region: string;
  mbti: string;
  selfIntroduction: string;
  interests: string[];
};

const ProfilePage = () => {
  const { data, isError, isLoading } = useGetProfile();
  const { mutate } = usePostEditProfile();
  const [values, setValues] = useState<UserInfo>({
    region: data?.region,
    mbti: data?.mbti,
    selfIntroduction: data?.selfIntroduction,
    interests: data?.interests.map((interest: { interestName: string }) => interest.interestName),
  });

  const handleValueChange = (field: string, value: string | string[]) => {
    const selectedValue = value.length === 1 ? value[0] : value;
    setValues((prev) => ({ ...prev, [field]: selectedValue }));
  };

  const handleSubmit = () => {
    mutate(values);
  };

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
        onChange={handleValueChange}
        values={values}
        {...data}
        interests={data.interests.map(
          (interest: { id: number; interestName: string }) => interest.interestName
        )}
      />
      <UserInfoEditBtn onSubmit={handleSubmit} />
    </Layout>
  );
};

export default ProfilePage;
