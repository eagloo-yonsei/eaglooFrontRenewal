import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useProfileContext } from 'app.feature/profile/screen/ScreenProfileProvider';
import Button from 'app.components/Button/Button';

export default function ProfileFoot() {
  const router = useRouter();
  const { updating, updatable, openConfirmModal } = useProfileContext();

  return (
    <Container>
      <CancelButton
        onClick={() => {
          router.push('/');
        }}
      >{`취소`}</CancelButton>
      <Button
        buttonContent={'정보 변경'}
        isLoading={updating}
        onClick={openConfirmModal}
        disabled={!updatable}
        width={'120px'}
        fontSize={'18px'}
      >
        정보 변경
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: fit-content;
  padding: 0px 20px;
`;

const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 46px;
  font-size: 18px;
  font-family: ${(props) => props.theme.subLabelFont};
  color: ${(props) => props.theme.mainBlue};
  border: 2px solid ${(props) => props.theme.mainBlue};
  border-radius: 8px;
  cursor: pointer;
`;
