import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, type AxiosResponse } from 'axios';
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/components/Loading/fullScreen';
import { LOGIN_URL } from '@/config';
import { ElMessage } from 'element-plus';
import { getStatusMsg } from './helper/status';
import { useUserStore } from '@/store/modules/user';
import { router } from '@/router';
import { baseConfig } from './constant';
import type { CustomAxiosRequestConfig, Response } from './interface';

class Request {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.interceptRequest();
    this.interceptResponse();
  }

  static create = (config: AxiosRequestConfig) => {
    return new Request(config);
  };

  private interceptRequest = () => {
    this.instance.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        config.headers.auth = useUserStore().token;
        // 当前请求不需要显示 loading，在 api 服务中通过指定的第三个参数: { loading: false } 来控制
        config.loading ??= false;
        config.loading && showFullScreenLoading();
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  };
  private interceptResponse = () => {
    this.instance.interceptors.response.use(
      (response: AxiosResponse & { config: CustomAxiosRequestConfig }) => {
        const { data, config } = response;
        config.loading && tryHideFullScreenLoading();

        if (data.code === 0) return response.data;

        if ([1001, 1002, 1003, 10047, 1005].includes(data.code)) {
          useUserStore().setToken('');
          router.replace(LOGIN_URL);
          ElMessage.error(data.msg);
        } else if (data.code == 2102) {
          // ElMessage.error(i18n.t2("@core.error_" + data.code));
        } else {
          // ElMessage.error(i18n.t2(data.msg));
        }
        return Promise.reject(response.data);
      },
      async (error: AxiosError) => {
        const { response } = error;
        tryHideFullScreenLoading();
        // 请求超时 && 网络错误单独判断，没有 response
        if (error.message.includes('timeout')) ElMessage.error('请求超时！请您稍后重试');
        if (error.message.includes('Network Error')) ElMessage.error('网络错误！请您稍后重试');
        // 根据服务器响应的错误状态码，做不同的处理
        if (response) ElMessage.error(getStatusMsg(response.status));
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) router.replace('/500');
        return Promise.reject(error);
      }
    );
  };

  get = <D, T>(url: string, params?: D, config = {} as CustomAxiosRequestConfig) => {
    return this.instance.get<D, Response<T>>(url, { params, ...config });
  };
  post = <D, T>(url: string, params?: D, config = {} as CustomAxiosRequestConfig) => {
    return this.instance.post<D, Response<T>>(url, params, config);
  };
}

export default Request.create(baseConfig);
