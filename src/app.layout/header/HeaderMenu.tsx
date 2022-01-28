import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderMenu = () => {
  return (
    <StyledWrapper>
      <div>
        <Link href="/">홈</Link>
      </div>
      <div>
        <span>연세 바로가기</span>
      </div>
      <div>
        <Link href="/feedback">피드백</Link>
      </div>
    </StyledWrapper>
  );
};

export default HeaderMenu;

const StyledWrapper = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: calc(100% - 460px);
  height: 50px;

  div {
    position: relative;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    min-width: 45px;
    width: fit-content;
    height: 100%;
    color: white;
    font-size: 14px;
    font-family: NexonGothicLv1Bold;

    span {
      cursor: pointer;
    }
  }
`;
