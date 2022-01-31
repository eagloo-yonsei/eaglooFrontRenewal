import { useQuery } from 'react-query';
import { API_ROOM_LIST } from 'app.modules/api/eagloo.list';
import API from 'app.modules/api';

const requestRoomList = async () => {
  const { data } = await API.GET({ url: API_ROOM_LIST, data: {} });

  const publicRooms = data?.filter((item) => item.id.includes('public'));
  const customRooms = data?.filter((item) => !item.id.includes('public'));

  return { publicRooms, customRooms };
};

const useRoomList = () => {
  const queryData = useQuery(API_ROOM_LIST, async () => {
    return await requestRoomList();
  });

  return queryData;
};

export default useRoomList;
