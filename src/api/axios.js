import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b6fc52e0e60f365fc868aa4eaa194e3c',
    language: 'ko-KR',
  }
})

export default instance;