import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { ProfileDetailsForm } from 'components/sign-up/profile-details/ProfileDetailsForm';
import { ProfileForm } from 'components/sign-up/ProfileForm';
import { useState } from 'react';

export type UserInfo = {
  [name: string]: string | number;
};

type Step = 'profileForm' | 'profileDetailsForm' | 'InterestForm';

function SignUpPage() {
  const [step, setStep] = useState<Step>('profileForm');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  return (
    <NoHeaderFooterLayout>
      <>
        {step === 'profileForm' && (
          <ProfileForm onNext={() => setStep('profileDetailsForm')} setUserInfo={setUserInfo} />
        )}
        {step === 'profileDetailsForm' && <ProfileDetailsForm />}
      </>
    </NoHeaderFooterLayout>
  );
}

export default SignUpPage;
