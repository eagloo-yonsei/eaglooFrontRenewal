import React from 'react';
import styled from 'styled-components';
import useQueryFn from 'app.hooks/useQueryFn';
import ScreenEntry from 'app.feature/entry/screen/ScreenEntry';
import { CustomRoom, Room } from 'app.modules/constant/interface';
import { API_ROOM_INFO } from 'app.modules/api/eagloo.entry';
import { fadeIn } from 'app.styled/keyframe';
import ScreenEntryProvider from 'app.feature/entry/screen/ScreenEntryProvider';

const Page_Entry = ({ roomType, roomId }) => {
  const {
    isLoading,
    isError,
    data: roomInfo,
  } = useQueryFn<Room | CustomRoom>(API_ROOM_INFO(roomId));

  if (isLoading || isError) return null;
  return <Entry roomType={roomType} roomId={roomId} roomInfo={roomInfo} />;
};

const Entry = ({ roomType, roomId, roomInfo }) => {
  return (
    <StyledWrapper>
      <ScreenEntryProvider>
        <ScreenEntry />
      </ScreenEntryProvider>
    </StyledWrapper>
  );
};

export default Page_Entry;

Page_Entry.getInitialProps = async (ctx) => {
  return { roomType: ctx.query.roomType, roomId: ctx.query.roomId };
};

const StyledWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 500ms;
`;
