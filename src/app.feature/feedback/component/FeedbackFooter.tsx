import React from 'react';
import styled from 'styled-components';
import Button from 'app.components/Button/Button';
import { useFormContext } from 'react-hook-form';

const FeedbackFooter = ({ submitting }) => {
  const { watch } = useFormContext();
  return (
    <StyledWrapper>
      <Button
        type="submit"
        disabled={
          !watch()?.category || !watch()?.content || !watch()?.content?.length
        }
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
