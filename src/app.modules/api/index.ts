import axios from 'axios';
import { errorMessage } from '../constant/errorMessage';
import { qs } from 'app.modules/util/qs';
import { toast } from 'react-toastify';

let axiosClient = axios.create({
  baseURL: process.env.EAGLOO_API_URI,
  // TEST
  headers: {
    'Content-Type': 'application/json',
  },
});

export const request: any = async ({ url, method, data = null }) => {
  try {
    const response: any = await axiosClient({
      method,
      url,
      data,
    });

    return response;
  } catch (error) {
    console.error('#error-web-client: ', error.toString());
    if (error.toString().includes('Network Error')) {
      toast.error(
        `😥 네트워크 오류로 처리되지 않았습니다.\\n다시 시도해주세요.`
      );
    }
  }
};

class API {
  async CALL({ method, url, data = null }) {
    return request({ method, url, data });
  }

  GET({ url, ...params }) {
    return this.CALL({
      method: 'GET',
      url: url + qs.stringURL(params.data),
    });
  }

  POST({ url, ...params }) {
    return this.CALL({
      method: 'POST',
      url,
      ...params,
    });
  }

  PUT({ url, ...params }) {
    return this.CALL({
      method: 'PUT',
      url,
      ...params,
    });
  }

  DELETE({ url, ...params }) {
    return this.CALL({
      method: 'DELETE',
      url,
      ...params,
    });
  }
}

export default new API();
