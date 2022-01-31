import React from 'react';
import styled from 'styled-components';

const HomeBanner = () => {
  return (
    <StyledWrapper>
      <div className="home-banner-img">
        <img src="/images/common/HomeImg__Yonsei-min.png" />
      </div>
      <div className="home-title">
        <div className="title-text">
          연세대학교
          <br />
          온라인 스터디 서비스
        </div>
        <div className="title-logo">EAGLOO</div>
      </div>
      <div className="home-sub-title">
        이제 어디서나 스터디 카페를 즐기세요. EAGLOO는 비대면 온라인
        <br />
        시대에 발맞추어 필요한 모든 서비스를 제공하고 있습니다.
        <br />
        온라인스터디룸에서 익숙하면서도 새로운 경험을 해보세요.
      </div>
    </StyledWrapper>
  );
};

export default HomeBanner;

const StyledWrapper = styled.div`
  color: var(--color-white);

  .home-banner-img {
    position: absolute;
    text-align: right;
    width: 100%;
    z-index: -1;

    img {
      opacity: 0.4;
      height: 480px;
    }
  }

  .home-title {
    .title-text {
      font-size: 38px;
      font-family: NexonGothicLv1Bold;
      line-height: 50px;
      letter-spacing: 1px;
    }

    .title-logo {
      font-size: 42px;
      margin-top: 15px;
      margin-bottom: 35px;
      line-height: 58px;
      font-family: RecipeKorea;
    }
  }

  .home-sub-title {
    font-size: 16px;
    font-family: NexonGothicLv1;
    line-height: 34px;
    margin-bottom: 40px;
  }
`;
