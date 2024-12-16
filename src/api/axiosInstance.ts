//Axios 기본 설정
import axios from 'axios';

//catAlbum instance
const axiosInstance = axios.create({
  baseURL: 'https://cataas.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'image/jpeg',
  },
});

export default axiosInstance;
