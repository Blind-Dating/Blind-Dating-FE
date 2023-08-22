import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import PersonalityTestForm from 'components/sign-up/personality-test/PersonalityTestForm';
import { ProfileDetailsForm } from 'components/sign-up/profile-details/ProfileDetailsForm';
import { ProfileForm } from 'components/sign-up/ProfileForm';
import { useState } from 'react';

export type SignUpAllValues = {
  [key: string]: string | string[] | (boolean | null)[];
};

type Step = 'profileForm' | 'profileDetailsForm' | 'personalityTestForm';

function SignUpPage() {
  const [step, setStep] = useState<Step>('profileForm');
  const [signUpAllValues, setSignUpAllValues] = useState<SignUpAllValues | null>(null);

  return (
    <NoHeaderFooterLayout>
      <>
        {step === 'profileForm' && (
          <ProfileForm
            onNext={() => setStep('profileDetailsForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
        {step === 'profileDetailsForm' && (
          <ProfileDetailsForm
            onNext={() => setStep('personalityTestForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
        {step === 'personalityTestForm' && (
          <PersonalityTestForm
            onNext={() => setStep('personalityTestForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
      </>
    </NoHeaderFooterLayout>
  );
}

export default SignUpPage;
