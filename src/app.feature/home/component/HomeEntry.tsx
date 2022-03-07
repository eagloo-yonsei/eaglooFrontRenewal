import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import CustomRoomModal from 'app.components/CustomRoomModal';

const HomeEntry = () => {
  const [showCustomRoomModal, setShowCustomRoomModal] = useState(false);

  return (
    <StyledWrapper>
      <CustomRoomModal
        showCustomRoomModal={showCustomRoomModal}
        setShowCustomRoomModal={setShowCustomRoomModal}
      />
      <div className="room-entry-wrap open">
        <div className="room-title">오픈 스터디룸</div>
        <div className="room-desc">
          누구나 입장할 수 있는 오픈 스터디룸입니다. 이글루에서 자체적으로
          제공하는 공용 스터디룸과 사용자가 직접 만든 스터디룸에 참여해 보세요!
        </div>
        <Link href="/list">
          <div className="entry-button">참가하기</div>
        </Link>
      </div>
      <div className="room-entry-wrap all">
        <div className="room-title">스터디룸 만들기/검색</div>
        <div className="room-desc">
          사용자 설정 스터디룸을 검색하거나, 직접 생성할 수도 있습니다! 같은
          목표를 가진 사람들과 함께 공부해 보세요!
        </div>
        <div
          className="entry-button"
          onClick={() => setShowCustomRoomModal(true)}
        >
          만들기/찾기
        </div>
      </div>
    </StyledWrapper>
  );
};

export default HomeEntry;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .room-entry-wrap {
    flex-direction: column;
    position: relative;
    width: 48%;
    height: 190px;
    padding: 25px;
    height: 190px;
    border-radius: 5px;

    .room-title {
      font-size: 32px;
      margin-bottom: 18px;
      font-family: NexonGothicLv1Bold;
    }

    .room-desc {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 10px;
      font-family: NexonGothicLv1Bold;
    }

    .entry-button {
      cursor: pointer;
      position: absolute;
      right: 25px;
      bottom: 20px;
      border-radius: 15px;
      text-align: center;
      line-height: 40px;
      width: 140px;
      height: 40px;
      font-size: 22px;
      font-family: SamlipHopang;
      transition: all 200ms;

      &:hover {
        opacity: 0.8;
      }
    }

    &.open {
      background: var(--color-orange-gradient);
      color: var(--color-white);

      .entry-button {
        background-color: var(--color-white);
        color: var(--color-orange-400);
      }
    }

    &.all {
      background-color: var(--color-white);
      color: var(--color-main);

      .entry-button {
        background-color: var(--color-blue-000);
        color: var(--color-white);
      }
    }
  }
`;
