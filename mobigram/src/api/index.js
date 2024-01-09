import { axiosInstance } from "./core";

const getPostList = async (pageParam) => {
  const response = await axiosInstance.get(`api/posts?page=${pageParam}`);
  console.log("response data", response.data);

  return response.data;
};

const getFriendList = async () => {
  const response = await axiosInstance.get("api/user/friend");
  console.log("response data", response.data);

  return response.data;
};

// 번들링 사이즈 감소 목적
export const Api = {
  getPostList,
  getFriendList,
};
