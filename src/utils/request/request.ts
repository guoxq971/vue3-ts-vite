import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message, notification } from 'ant-design-vue';
import { responseBase } from '@/interfaces/common';

export class Request {
  // baseURL
  public static baseURL: string = '/api';
  // 超时时间
  public static timeout: number = 6000;
  // 请求头
  private static contentType:string = 'application/x-www-form-urlencoded';
  // axios实例
  public static axiosInstance: AxiosInstance;

  public static init () {
    const { baseURL, timeout } = Request;

    // 创建axios实例
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
    });

    // 初始化拦截器
    this.initInterceptors();

    return axios;
  }

  // 初始化拦截器
  public static initInterceptors () {
    const {
      reqOk,
      reqError,
      respOk,
      respError,
    } = Request;

    // 设置post请求头
    this.axiosInstance.defaults.headers.post['Content-Type'] = Request.contentType;

    // 请求拦截器
    this.axiosInstance.interceptors.request.use(respOk, respError);

    // 响应拦截器
    this.axiosInstance.interceptors.response.use(reqOk, reqError);
  }

  /**
   * 请求发送成功
   * @param config 请求配置
   * @returns
   */
  private static respOk (config: AxiosRequestConfig){
    return config;
  }

  /**
   * 请求发送失败
   * @param config 请求配置
   * @returns
   */
  private static respError (error: any){
    console.log(error);
    message.warn('拦截器发生异常');
  }

  /**
   * 响应成功
   * @param response 响应回调
   * @returns
   */
  private static reqOk (response: AxiosResponse){
    const { data }:{data:responseBase} = response;
    if (response.status !== 200) {
      Request.errorHandle(response);
      return Promise.reject(data);
    }
    if (data.code !== 0) message.error(data.msg);
    return Promise.resolve(data);
  }

  /**
   * 响应错误
   * @param error 响应错误
   */
  private static reqError (error: any){
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      Request.errorHandle(response);
      // return Promise.reject(response.data);
    } else {
      message.warn('网络连接异常,请稍后再试!');
    }
  }

  /**
   * http握手错误
   * @param res 响应回调,根据不同响应进行不同操作
   */
  public static errorHandle (res: any) {
    // 状态码判断
    switch (res.status) {
    case 401:
      message.warn('账号未登录,请重新登录!');
      break;
    case 403:
      break;
    case 404:
      message.warn('请求的资源不存在');
      break;
    default:
      message.warn('连接错误');
    }
  }
}
