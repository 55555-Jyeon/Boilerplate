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
  const response = await axiosInstance.get("api/user");
  // console.log("response data", response.data); // null

  return response.data;
};

// 번들링 사이즈 감소 목적
export const Api = {
  getPostList,
  fetchPostList,
  getFriendList,
};

export const AuthApi = {
  // sign-up
  async postSignUpData(signupData) {
    const response = await axiosInstance.post("api/user", signupData);
    return response;
  },
  // sign-in
  async postLoginUserData(loginUserData) {
    const response = await axiosInstance.post("api/user/login", loginUserData);
    return response.data;
  },

  // get random users
  async getUsersData() {
    const response = await axiosInstance.get("api/user");
    console.log("user data?", response.data); // null
    return response.data;
  },
};
