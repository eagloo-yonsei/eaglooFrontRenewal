import { RefObject } from 'react';

export interface Seat {
  seatNo: number;
  socketId: string;
  userEmail: string;
  userNickName?: string;
  endTime: number;
  streamState: {
    video: boolean;
    audio: boolean;
  };
}

export interface Room {
  id: string;
  roomName: string;
  roomDescription?: string;
  seats: Seat[];
}

export interface CustomRoom {
  id: string;
  roomName: string;
  roomDescription: string;
  ownerId: string;
  openToPublic: boolean;
  usePassword: boolean;
  password: string;
  allowMic: boolean;
  seats: Seat[];
}

export interface EntryContextProp {
  roomType: 'PUBLIC' | 'CUSTOM';
  roomInfo: Room | CustomRoom;
  roomPasswordInput: string;
  selectedSeatNo: number;
  timeToStudy: number;
  camAccepted: boolean;
  userStreamHTMLRef?: RefObject<HTMLVideoElement>;
  setRoomPasswordInput: (password: string) => void;
  handleSelectSeat: (seatNo: number) => void;
  handleDecreaseTimeToStudy: () => void;
  handleIncreaseTimeToStudy: () => void;
  handleCheckVacancy: () => Promise<boolean>;
  handleEnterRoom: () => void;
  handleGetUserStream: () => void;
  handleStopSelfStream: () => void;
  handleExitToList: () => void;
}
