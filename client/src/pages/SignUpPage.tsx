import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import PersonalityTestForm from 'components/sign-up/personality-test/PersonalityTestForm';
import { ProfileDetailsForm } from 'components/sign-up/profile-details/ProfileDetailsForm';
import { ProfileForm } from 'components/sign-up/profile/ProfileForm';
import { YourInterestForm } from 'components/sign-up/your-interest/YourInterestForm';
import { useState } from 'react';

export type SignUpAllValues = {
  [key: string]: string | string[] | (boolean | null)[];
};

type Step = 'profileForm' | 'profileDetailsForm' | 'personalityTestForm' | 'yourInterestForm';

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
            onNext={() => setStep('yourInterestForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
        {step === 'yourInterestForm' && (
          <YourInterestForm
            onNext={() => setStep('yourInterestForm')}
            setSignUpAllValues={setSignUpAllValues}
          />
        )}
      </>
    </NoHeaderFooterLayout>
  );
}

export default SignUpPage;
