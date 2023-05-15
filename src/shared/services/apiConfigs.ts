import axios from 'axios';

const url = 'https://api.green-api.com';
export const idInstance = '1101820138';
export const apiTokenInstance = 'aefae1a9b1f745d88c60af8a3b54a3818cbd7bdc43184945bb';

export const axiosInstance = axios.create({
  baseURL: url + `/waInstance${idInstance}/`,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  },
  withCredentials: true
});
