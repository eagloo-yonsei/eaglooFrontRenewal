import React from 'react';
import styled from 'styled-components';

const LogoBox = () => {
  return (
    <StyledWrapper>
      <img
        className="logo-img"
        src="/images/common/login-icon.png"
        alt="로고 이미지"
      />
      <div className="logo-label">EAGLOO</div>
      <div className="logo-subLabel">연세대학교 온라인 스터디공간</div>
    </StyledWrapper>
  );
};

export default LogoBox;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-img {
    width: 130px;
    margin-bottom: 32px;
  }

  .logo-label {
    color: var(--color-white);
    font-size: 40px;
    font-family: 'RecipeKorea';
    letter-spacing: 3px;
    margin-bottom: 10px;
  }

  .logo-subLabel {
    color: var(--color-white);
    font-size: 18px;
    font-family: 'JejuGothic';
    margin-bottom: 55px;
  }
`;
