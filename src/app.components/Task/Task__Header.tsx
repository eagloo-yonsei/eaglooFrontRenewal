import React from 'react';
import styled from 'styled-components';

export default function TaskHeader() {
  const dayName = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = dayName[today.getDay()];

  return (
    <Container>
      <DateContainer>
        <Day>{`${month}월 ${date}일 ${day}`}</Day>
      </DateContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 0;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-family: ${(props) => props.theme.plainBoldTextFont};
  color: #0043a5;
`;

const Day = styled.div`
  font-size: 25px;
`;
