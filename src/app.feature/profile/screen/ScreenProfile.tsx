import React from 'react';
import styled from 'styled-components';
import ProfileBody from '../component/Profile__Body';
import ProfileFoot from '../component/Profile__Foot';
import ProfileModal from '../component/Profile__Modal';
import { fadeIn } from 'app.styled/keyframe';

export default function ProfileContainer({ userInfo }) {
  return (
    <>
      <Container>
        <Header>
          <Title>{`내 정보 관리`}</Title>
        </Header>
        <ProfileBody userInfo={userInfo} />
        <ProfileFoot />
      </Container>
      <ProfileModal />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 32px;
  font-family: ${(props) => props.theme.subLabelFont};
  padding: 80px 120px 40px 120px;

  border-radius: 35px 35px 0 0;
  margin: 0 auto;
  overflow: hidden;
  width: 80%;
  height: 100%;
  background-color: var(--color-white);
  animation: ${fadeIn} 500ms;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
`;

const Title = styled.div`
  font-size: 30px;
  font-family: ${(props) => props.theme.iconFont};
`;
