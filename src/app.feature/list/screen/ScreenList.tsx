import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ListRow from 'app.feature/list/component/ListRow';
import useRoomList from 'app.feature/list/query/useRoomList';
import Loading from 'app.components/Loading/Loading';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { fadeIn } from 'app.styled/keyframe';

const ScreenList = () => {
  const router = useRouter();
  const { isLoading, data } = useRoomList();
  const getUser = useGetUser();
  const { login } = getUser;

  const handleEntryRoom = (roomType, roomId) => {
    if (login) router.push(`/entry?roomType=${roomType}&roomId=${roomId}`);
    else router.push('/login');
  };

  if (isLoading) return <Loading />;
  const { publicRooms, customRooms } = data;
  return (
    <StyledWrapper>
      <div className="close-button-wrap">
        <Link href="/">
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </Link>
      </div>
      <div className="scroll-box">
        <ListRow
          roomType="PUBLIC"
          roomList={publicRooms}
          handleEntryRoom={handleEntryRoom}
        />
        <ListRow
          roomType="CUSTOM"
          roomList={customRooms}
          handleEntryRoom={handleEntryRoom}
        />
      </div>
    </StyledWrapper>
  );
};

export default ScreenList;

const StyledWrapper = styled.div`
  height: 100%;
  animation: ${fadeIn} 500ms;

  .scroll-box {
    overflow-y: scroll;
    padding-right: 20px;
    height: calc(100% - 47px);
  }

  .close-button-wrap {
    text-align: end;
    height: 32px;
    margin-bottom: 15px;

    svg {
      cursor: pointer;
      path {
        fill: var(--color-main);
      }
    }
  }
`;
