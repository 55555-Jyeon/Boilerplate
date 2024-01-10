import { axiosInstance } from "./core";

const getPostList = async (pageParam) => {
  const response = await axiosInstance.get(`api/posts?page=${pageParam}`);
  return response.data;
};
const fetchPostList = async (pageParam) => {
  const response = await axiosInstance.get(`api/posts?page=${pageParam}`);
  return response.data;
};

const getFriendList = async () => {
  const response = await axiosInstance.get("api/user/friend");
  /* console.log("response data", response.data); */

  return response.data;
};

// 번들링 사이즈 감소 목적
export const Api = {
  getPostList,
  fetchPostList,
  getFriendList,
};

const UserPATH = "/api/user";
export const AuthApi = {
  // sign-up
  async postSignUpData(signupData) {
    const res = await axiosInstance().post(UserPATH, signupData);
    return res;
  },
  // sign-in
  async postLoginUserData(loginUserData) {
    const res = await axiosInstance().post(UserPATH + "login", loginUserData);
    return res.data;
  },
};
