import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const HeaderRT = ({ getUser }) => {
  const { isLoading, login, info } = getUser;

  return (
    <StyledWrapper>
      <div className="user-info-wrap">
        <div className="user-info">{info?.nickname ?? info?.email} 님</div>
        <div className="user-image">
          <FontAwesomeIcon icon={faUserAlt} />
        </div>
        <div className="user-profile">
          <Link href="/profile">내 정보</Link>
        </div>
      </div>
      <div className="logout-button">로그아웃</div>
    </StyledWrapper>
  );
};

export default HeaderRT;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 350px;
  height: 50px;

  .user-info-wrap {
    display: flex;
    font-size: 13px;
    font-family: 'NexonGothicLv1';
    color: rgb(196, 196, 196);
    margin-right: 18px;

    .user-info {
      display: flex;
      width: 100px;
      justify-content: flex-end;
      color: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .user-image {
      margin: 0 12px 0 15px;
    }

    .user-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
    }
  }
  
  .logout-button {
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 120px;
    height: 30px;
    padding: 0px 20px;
    border-radius: 15px;
    font-size: 22px;
    font-family: SamlipHopang;
    color: rgb(173, 136, 46);
    background-color: white;
  }
}
`;
