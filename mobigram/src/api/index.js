import { axiosInstance } from "./core";

const PATH = ""; // auth 외 api 경로

const getPostList = async () => {
  const response = await axiosInstance.get("api/posts");
  console.log("response data", response.data);

  return response.data;
};

// 번들링 사이즈 감소 목적
export const Api = {
  getPostList,
};
