import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import apiConf from '../../config/api.config';

// Routes
const baseURL: string = 'https://coinlib.io/api/v1/';
const listUrl: string = 'coinlist';

let apiInstance: AxiosInstance;

const instance = () => {
  const instanceConfig: AxiosRequestConfig = {
    baseURL,
    responseType: 'json',
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (!apiInstance) {
    apiInstance = axios.create(instanceConfig);
  }
  return apiInstance;
};

// API methods
const coinApi = {
  getCoins: (): Promise<any> => {
    return instance().get<string>(listUrl, {
      params: {
        key: apiConf.currencyApiToken,
        pref: 'EUR',
        order: 'price_desc',
      },
    });
  },
};

export default coinApi;
