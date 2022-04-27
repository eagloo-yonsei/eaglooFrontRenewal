import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  ChildrenProp,
  Post,
  PostFilter,
  PostCategory,
  PostComment,
} from 'app.modules/constant/interface';
import { toastErrorMessage } from 'app.modules/util/ToastMessage';

interface RoomScreenShareContext {}

const InitialScreenShareContext: RoomScreenShareContext = {};

const RoomScreenShareContext = createContext<RoomScreenShareContext>(
  InitialScreenShareContext
);
export const useRoomScreenShareContext = () =>
  useContext(RoomScreenShareContext);

export default function RoomScreenShareProvider({
  userInfo,
  roomUsingInfo,
  children,
}) {
  const roomScreenShareContext = {};

  const handleScreenShare = () => {
    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        stream.getAudioTracks().forEach((audioTrack) => {
          audioTrack.enabled = false;
        });
        // userStreamHTMLRef.current.srcObject = stream;
      });
  };

  return (
    <RoomScreenShareContext.Provider value={roomScreenShareContext}>
      {children}
    </RoomScreenShareContext.Provider>
  );
}
