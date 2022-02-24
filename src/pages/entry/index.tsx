import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import API from 'app.modules/api';
import useQueryFn from 'app.hooks/useQueryFn';
import ScreenEntry from 'app.feature/entry/screen/ScreenEntry';
import { toastErrorMessage } from 'app.modules/util/ToastMessage';
import { useStoreRoomUsingInfo } from 'app.store/roomUsingInfo/store.roomUsingInfo';
import {
  CustomRoom,
  EntryContextProp,
  Room,
} from 'app.modules/constant/interface';
import {
  API_ROOM_CHECK_VACANCY,
  API_ROOM_INFO,
} from 'app.modules/api/eagloo.entry';

const Page_Entry = ({ roomType, roomId }) => {
  const {
    isLoading,
    isError,
    data: roomInfo,
  } = useQueryFn<Room | CustomRoom>(API_ROOM_INFO(roomId));

  if (isLoading || isError) return null;
  return <Entry roomType={roomType} roomId={roomId} roomInfo={roomInfo} />;
};

const EntryContext = createContext<EntryContextProp>({
  roomType: 'PUBLIC',
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
  handleSelectSeat: () => {},
  handleDecreaseTimeToStudy: () => {},
  handleIncreaseTimeToStudy: () => {},
  handleCheckVacancy: () => {
    return new Promise(() => false);
  },
  handleEnterRoom: () => {},
  handleGetUserStream: () => {},
  handleStopSelfStream: () => {},
  handleExitToList: () => {},
});
export const useEntryContext = () => useContext(EntryContext);

const Entry = ({ roomType, roomId, roomInfo }) => {
  const setRoomUsingInfo = useStoreRoomUsingInfo(
    (state) => state.setRoomUsingInfo
  );

  const router = useRouter();
  const userStreamHTMLRef = useRef<any>(null);
  const [camAccepted, setCamAccepted] = useState<boolean>(false);
  const [roomPasswordInput, setRoomPasswordInput] = useState<string>('');
  const [selectedSeatNo, setSelectedSeatNo] = useState<number>(0);
  const [timeToStudy, setTimeToStudy] = useState<number>(2);

  const handleGetUserStream = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setCamAccepted(true);
        userStreamHTMLRef.current!.srcObject = stream;
      });
  };

  const handleSelectSeat = (seatNo: number) => {
    if (seatNo === selectedSeatNo) setSelectedSeatNo(0);
    else setSelectedSeatNo(seatNo);
  };

  const handleDecreaseTimeToStudy = () => {
    if (timeToStudy > 1) setTimeToStudy((timeToStudy) => timeToStudy - 0.5);
  };

  const handleIncreaseTimeToStudy = () => {
    if (timeToStudy < 10) setTimeToStudy((timeToStudy) => timeToStudy + 0.5);
  };

  const handleCheckVacancy = async () => {
    try {
      const res = await API.POST({
        url: API_ROOM_CHECK_VACANCY,
        data: {
          roomId,
          seatNo: selectedSeatNo,
        },
      });
      if (res.data.success) return true;
      else throw 'err';
    } catch (err) {
      return false;
    }
  };

  const handleEnterRoom = () => {
    if (roomInfo?.usePassword) {
      if (roomPasswordInput !== roomInfo.password) {
        toastErrorMessage('비밀번호가 다릅니다.');
        return;
      }
    }
    handleStopSelfStream();
    const endTime = new Date().getTime() + 1000 * 60 * 60 * timeToStudy;

    setRoomUsingInfo({
      roomType,
      roomId: roomInfo.id,
      roomName: roomInfo.roomName,
      seatNo: selectedSeatNo,
      endTime,
    });

    router.push(
      `/room?roomType=${roomType}&roomId=${roomInfo.id}&roomName=${roomInfo.roomName}&seatNo=${selectedSeatNo}&endTime=${endTime}`
    );
  };

  const handleStopSelfStream = () => {
    const selfStream = userStreamHTMLRef.current?.srcObject as MediaStream;
    const tracks = selfStream?.getTracks();
    if (tracks) {
      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  const handleExitToList = () => {
    router.push('/list');
  };

  useEffect(() => {
    if (!roomType || !roomId) router.push('/list');
    else {
      handleGetUserStream();
    }
  }, [roomInfo]);

  const entryContext = {
    roomType,
    roomId,
    roomInfo,
    roomPasswordInput,
    selectedSeatNo,
    timeToStudy,
    userStreamHTMLRef,
    camAccepted,
    setRoomPasswordInput,
    handleGetUserStream,
    handleSelectSeat,
    handleDecreaseTimeToStudy,
    handleIncreaseTimeToStudy,
    handleCheckVacancy,
    handleEnterRoom,
    handleStopSelfStream,
    handleExitToList,
  };

  return (
    <EntryContext.Provider value={entryContext}>
      <ModalBackground
        onClick={() => {
          handleStopSelfStream();
          handleExitToList();
        }}
      />
      <ScreenEntry />
    </EntryContext.Provider>
  );
};

export default Page_Entry;

const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  //background-color: black;
  //opacity: 0.2;
`;

Page_Entry.getInitialProps = async (ctx) => {
  return { roomType: ctx.query.roomType, roomId: ctx.query.roomId };
};
