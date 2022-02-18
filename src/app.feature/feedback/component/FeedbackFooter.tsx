import React from 'react';
import styled from 'styled-components';
import Button from 'app.components/Button/Button';

const FeedbackFooter = ({ submitting }) => {
  return (
    <StyledWrapper>
      <Button
        type="submit"
        isLoading={submitting}
        width="120px"
        fontSize="16px"
      >
        피드백 제출
      </Button>
    </StyledWrapper>
  );
};

export default FeedbackFooter;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 0px 20px;
  justify-content: flex-end;
`;
