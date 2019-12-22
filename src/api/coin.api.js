import axios from 'axios';
import api_conf from '../../config/api_config';

// Routes
const baseUrl = 'https://coinlib.io/api/v1/';
const listUrl = 'coinlist';

let apiInstance = null;

const instance = () => {
    if(apiInstance == null){
        apiInstance = axios.create({
            baseURL: 'https://coinlib.io/api/v1/',
            responseType: 'json',
            withCredentials:true,
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Accept':'application/json',
                'Content-Type':'application/json'
            }})
    }
    return apiInstance
}

// API methods
const coinApi = {
    getAllCoins: () => {
        return instance().get(listUrl,{
                params:{
                    key: api_conf.currencyApiToken,
                    pref:'EUR',
                    order:'price_desc'
                }
            })
    }
};

export default coinApi;
