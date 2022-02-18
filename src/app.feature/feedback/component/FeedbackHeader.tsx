import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { FeedbackCategory } from 'app.feature/feedback/constant/FeedbackCategory';

const FeedbackHeader = () => {
  const { register } = useFormContext();

  return (
    <StyledWrapper>
      <div className="title">피드백 남기기</div>
      <div className="category-selector">
        <div className="category-reminder">어떤 종류의 의견인가요?</div>
        <select
          {...register('category', { required: '카테고리를 선택해주세요.' })}
        >
          <option value={FeedbackCategory.GENERAL}>일반</option>
          <option value={FeedbackCategory.BUG}>버그 신고</option>
          <option value={FeedbackCategory.SUGGESTION}>기능 제안</option>
          <option value={FeedbackCategory.ENHANCEMENT}>개선점 건의</option>
        </select>
      </div>
    </StyledWrapper>
  );
};

export default FeedbackHeader;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 0px 20px;

  .title {
    font-size: 30px;
    font-family: 'RecipeKorea';
  }

  .category-selector {
    display: flex;
    align-items: center;
    width: fit-content;
    height: fit-content;
    gap: 18px;
  }

  .category-reminder {
    color: gray;
    font-size: 15px;
    font-family: 'SamlipHopang';
  }
`;
