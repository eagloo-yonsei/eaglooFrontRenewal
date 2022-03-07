import React, {
  createContext,
  useContext,
  RefObject,
  useRef,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import {
  RoomType,
  Room,
  CustomRoom,
  ChildrenProp,
} from 'app.modules/constant/interface';
import { useRouter } from 'next/router';
import { useStoreRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import { toastErrorMessage } from 'app.modules/util/ToastMessage';

interface EntryLocationStateProp {
  roomType: RoomType;
  roomId: string;
}

interface EntryContextProp {
  roomType: RoomType;
  roomInfo: Room | CustomRoom;
  roomPasswordInput: string;
  selectedSeatNo: number;
  timeToStudy: number;
  camAccepted: boolean;
  userStreamHTMLRef?: RefObject<HTMLVideoElement>;
  setRoomPasswordInput: (password: string) => void;
  selectSeat: (seatNo: number) => void;
  decreaseTimeToStudy: () => void;
  increaseTimeToStudy: () => void;
  checkVacancy: () => Promise<boolean>;
  enterRoom: () => void;
  getUserStream: () => void;
  stopSelfStream: () => void;
  exitToList: () => void;
}

const InitialEntryContext: EntryContextProp = {
  roomType: RoomType.PUBLIC,
  roomInfo: {
    id: '',
    roomName: '',
    seats: [],
  },
  roomPasswordInput: '',
  selectedSeatNo: 0,
  timeToStudy: 2,
  camAccepted: false,
  setRoomPasswordInput: () => {},
  selectSeat: () => {},
  decreaseTimeToStudy: () => {},
  increaseTimeToStudy: () => {},
  checkVacancy: () => {
    return new Promise(() => false);
  },
  enterRoom: () => {},
  getUserStream: () => {},
  stopSelfStream: () => {},
  exitToList: () => {},
};

const EntryContext = createContext<EntryContextProp>(InitialEntryContext);
export const useEntryContext = () => useContext(EntryContext);

export default function ScreenEntryProvider({ children }: ChildrenProp) {
  const API_ENDPOINT = process.env.EAGLOO_API_URI;

  const router = useRouter();
  const setRoomUsingInfo = useStoreRoomUsingInfo(
    (state) => state.setRoomUsingInfo
  );
  const userStreamHTMLRef = useRef<HTMLVideoElement>(null);
  const [camAccepted, setCamAccepted] = useState<boolean>(false);
  const [roomType, setRoomType] = useState<RoomType>(RoomType.PUBLIC);
  const [roomInfo, setRoomInfo] = useState<Room | CustomRoom>({
    id: '',
    roomName: '',
    seats: [],
  });
  const [roomPasswordInput, setRoomPasswordInput] = useState<string>('');
  const [selectedSeatNo, setSelectedSeatNo] = useState<number>(0);
  const [timeToStudy, setTimeToStudy] = useState<number>(2);

  useEffect(() => {
    // 엔트리 입장시 roomId prop을 받고 온 게 아니면 /list로 push
    const { roomType, roomId }: any = router.query;
    if (roomType && roomId) {
      setRoomType(roomType);
      getRoomInfo(roomId);
      getUserStream();
    } else {
      router.push('/list');
    }

    return () => {};
  }, []);

  function getUserStream() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setCamAccepted(true);
        userStreamHTMLRef.current!.srcObject = stream;
      });
  }

  async function getRoomInfo(roomId: string) {
    await axios
      .get<Room | CustomRoom>(`${API_ENDPOINT}/api/room/${roomId}`)
      .then((response) => {
        setRoomInfo(response.data);
      });
  }

  function selectSeat(seatNo: number) {
    if (seatNo === selectedSeatNo) {
      setSelectedSeatNo(0);
    } else {
      setSelectedSeatNo(seatNo);
    }
    return;
  }

  function decreaseTimeToStudy() {
    if (timeToStudy > 1) {
      setTimeToStudy((timeToStudy) => timeToStudy - 0.5);
    }
  }

  function increaseTimeToStudy() {
    if (timeToStudy < 10) {
      setTimeToStudy((timeToStudy) => timeToStudy + 0.5);
    }
  }

  async function checkVacancy() {
    const response = await axios.post<{
      success: boolean;
      message: string;
    }>(`${API_ENDPOINT}/api/room/checkVacancy`, {
      roomId: roomInfo.id,
      seatNo: selectedSeatNo,
    });
    if (response.data.success) {
      return true;
    } else {
      toastErrorMessage(response.data.message);
      return false;
    }
  }

  async function checkDuplicateUse() {
    // if(userInfo?.isAdmin){
    //     return false
    // }
    // const response = await axios.post<{}>(`${API_ENDPOINT}`)
  }

  async function enterRoom() {
    // TODO (SIGNIFICANT) - 비밀번호 있는 room 입장 시 비밀번호 검증은 서버 http 요청으로 처리할 것. 귀찮아서 일단 미룸.
    if ('usePassword' in roomInfo && roomInfo.usePassword) {
      if (roomPasswordInput !== roomInfo.password) {
        toastErrorMessage('비밀번호가 다릅니다.');
        return;
      }
    }
    stopSelfStream();
    const endTime = new Date().getTime() + 1000 * 60 * 60 * timeToStudy;

    await setRoomUsingInfo({
      roomType,
      roomId: roomInfo.id,
      roomName: roomInfo.roomName,
      seatNo: selectedSeatNo,
      endTime,
    });

    router.push('/room');
  }

  function stopSelfStream() {
    const selfStream = userStreamHTMLRef.current?.srcObject as MediaStream;
    const tracks = selfStream?.getTracks();
    if (tracks) {
      tracks.forEach((track) => {
        track.stop();
      });
    }
  }

  function exitToList() {
    router.push('/list');
  }

  const entryContext = {
    roomType,
    roomInfo,
    roomPasswordInput,
    selectedSeatNo,
    timeToStudy,
    userStreamHTMLRef,
    camAccepted,
    setRoomPasswordInput,
    selectSeat,
    decreaseTimeToStudy,
    increaseTimeToStudy,
    checkVacancy,
    enterRoom,
    getUserStream,
    stopSelfStream,
    exitToList,
  };

  return (
    <EntryContext.Provider value={entryContext}>
      {children}
    </EntryContext.Provider>
  );
}
