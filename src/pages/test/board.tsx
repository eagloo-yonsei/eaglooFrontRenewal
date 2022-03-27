import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import Loading from 'app.components/Loading/Loading';
import ScreenTestBoard from 'app.feature/test/screen/ScreenTestBoard';

const Page_TestBoard = () => {
  const getUser = useGetUser();

  if (getUser?.isLoading || !getUser?.login) return <Loading />;
  return <Board getUser={getUser} />;
};

const Board = ({ getUser }) => {
  return (
    <StyledWrapper>
      <ScreenTestBoard />
    </StyledWrapper>
  );
};
export default Page_TestBoard;

const StyledWrapper = styled.div`
  height: 100%;
`;
