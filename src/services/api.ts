import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.102:3333',
  //10.0.0.2
})

export default api;
