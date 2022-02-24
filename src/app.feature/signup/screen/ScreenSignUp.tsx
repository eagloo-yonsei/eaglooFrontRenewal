import React from 'react';
import styled from 'styled-components';
import { useSignupContext } from 'app.feature/signup/screen/ScreenSignUpProvider';
import EaglooIconBox from 'app.components/EaglooIconBox/EaglooIconBox';
import SignupEmailAndSecret from 'app.feature/signup/component/Signup__EmailAndSecret';
import SignupPassword from 'app.feature/signup/component/Signup__Password';
import SignupNickNameAndRealName from 'app.feature/signup/component/Signup__NickNameAndRealName';
import { FullPageContainer } from 'app.components/StyledComponents/StyledComponents';

export default function SignupContainer() {
  return (
    <Container>
      <InnerContainer>
        <EaglooIconBox />
        <InputSwitcher />
      </InnerContainer>
    </Container>
  );
}

function InputSwitcher() {
  const { secretAuthenticated, completeSettingPassword } = useSignupContext();

  if (!secretAuthenticated) {
    return <SignupEmailAndSecret />;
  } else {
    if (!completeSettingPassword) {
      return <SignupPassword />;
    } else {
      return <SignupNickNameAndRealName />;
    }
  }
}

const Container = styled(FullPageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 300px;
`;
