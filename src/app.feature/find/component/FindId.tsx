import React from 'react';
import styled from 'styled-components';
import { StylelessLink } from 'app.components/StyledComponents/StyledComponents';

const FindId = () => {
  return (
    <StyledWrapper>
      <div className="main-text">
        이글루의 아이디는 가입 시 입력하신 연세 이메일 주소와 동일합니다.
      </div>
      <div className="sub-text">
        EX. 이메일 주소가 EAGLOO@yonsei.ac.kr일 경우, 아이디는 EAGLOO 입니다.
      </div>
    </StyledWrapper>
  );
};

export default FindId;

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: ${(props) => props.theme.subLabelFont};

  .main-text {
    color: white;
    margin-bottom: 35px;
    font-size: 26.5px;
  }

  .sub-text {
    color: #b8d2ff;
  }
`;
