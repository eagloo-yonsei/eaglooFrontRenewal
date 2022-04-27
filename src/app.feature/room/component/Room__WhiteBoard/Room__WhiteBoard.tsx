import React, { useEffect, useRef, useState } from 'react';
import { useGetRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import styled from 'styled-components';
import Board from 'app.feature/test/component/Board';
import { SocketChannel } from 'app.modules/constant/interface';

export default function RoomWhiteBoard({ socketRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('socket');

    socketRef.on(SocketChannel.GET_CURRENT_ROOM, (socket) => {
      console.log(socket);
      socket.on('addItem', (data) => {
        console.log(data);
        socket.broadcast.emit('addItem', data);
      });
    });
  }, [socketRef, canvasRef?.current]);

  return (
    <StyledWrapper>
      <Board color="#000000" size={5} canvasRef={canvasRef} eraserSize={5} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;

  .brush-picker {
    label {
      color: white;
    }
  }

  .eraser-picker {
    label {
      color: white;
    }
  }
`;
