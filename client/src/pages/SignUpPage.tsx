import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import ProfileForm from 'components/sign-up/ProfileForm';
import ProfileDetailsForm from 'components/sign-up/ProfileDetailsForm';
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
