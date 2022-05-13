import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderMenu = () => {
  return (
    <StyledWrapper>
      <div>
        <Link href="/">홈</Link>
      </div>
      <div className="yonsei-menu-wrap">
        <span className="title">연세 바로가기</span>
        <div className="yonsei-menu">
          <a href="https://learnus.org/" target="_blank">
            LearnUs
          </a>
          <a href="https://portal.yonsei.ac.kr" target="_blank">
            연세 포탈
          </a>
          <a href="https://library.yonsei.ac.kr/" target="_blank">
            연세대학교 도서관
          </a>
        </div>
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

  .yonsei-menu-wrap {
    cursor: pointer;
    position: relative;
    transition: all 300ms;

    &:hover {
      .yonsei-menu {
        position: absolute;
        top: 50px;
        opacity: 1;
        a {
          height: 60px;
        }
      }
    }

    .yonsei-menu {
      transition: all 300ms;
      position: absolute;
      display: block;
      opacity: 0;
      top: 0;
      left: 0;
      z-index: 2;

      a {
        transition: 200ms;
        width: 180px;
        height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #004884;
      }
    }
  }

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
