import React from 'react';
import styled from 'styled-components';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import { useRouter } from 'next/router';

export default function AdminHeaderAuth() {
  const router = useRouter();
  const logoutAuthUser = useStoreIntoAPP((state) => state.logoutAuthUser);

  return (
    <LogOutButton
      onClick={() => {
        logoutAuthUser();
        router.push('/');
      }}
    >{`로그아웃`}</LogOutButton>
  );
}

const LogOutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 30px;
  padding: 0px 20px;
  border-radius: 15px;
  font-size: 22px;
  font-family: ${(props) => props.theme.inButtonFont};
  color: ${(props) => props.theme.loginButtonYellow};
  background-color: white;
  :hover {
    cursor: pointer;
  }
`;
