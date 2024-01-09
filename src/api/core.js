import axios from "axios";

const baseURL = "http://localhost:3000/"; // .env 파일에 정의 후 사용하기

export const axiosInstance = axios.create({
  baseURL: baseURL,
});
