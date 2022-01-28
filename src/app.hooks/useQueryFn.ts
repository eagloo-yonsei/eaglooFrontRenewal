import { useQuery } from 'react-query';
import API from 'app.modules/api';
import { toast } from 'react-toastify';

const requestFn = async ({ queryKey, data }) => {
  const response = await API.GET({ url: queryKey, data: { ...data } });
  return response.data;
};

const useQueryFn = <T>(queryKeys, options = {}) => {
  const queryKey = Array.isArray(queryKeys) ? queryKeys[0] : queryKeys;
  const data = Array.isArray(queryKeys) ? queryKeys[1] : null;

  return useQuery<T>(queryKeys, async () => requestFn({ queryKey, data }), {
    enabled: !!queryKeys,
    ...options,
    onError: () => {
      toast.error('예기치 못한 에러가 발생했습니다.');
    },
  });
};

export default useQueryFn;
