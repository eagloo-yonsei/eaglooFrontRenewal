import React from 'react';
import styled from 'styled-components';

export default function TaskCalendarHeader() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  return (
    <Container>
      <DateContainer>
        <Day>{`${year}년 ${month}월`}</Day>
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
