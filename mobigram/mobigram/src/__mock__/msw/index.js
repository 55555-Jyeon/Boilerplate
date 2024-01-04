import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import shortId from "shortid";
import { MockPostData, MockUserData } from "../faker/faker-data";

// MOCK
const UserData = MockUserData(20);
const PostData = MockPostData(30);

// USER
const signUpUserData = [];
const signInUserData = [];

export const getSignupUser = http.get("api/signup", () => {
  return HttpResponse.json([signUpUserData], {
    status: 200,
  });
});

export const getUserInfo = http.get("api/user", () => {
  return HttpResponse.json([UserData], {
    status: 200,
  });
});

// POSTS
export const getPostsData = http.get("api/posts", () => {
  return HttpResponse.json([PostData], {
    status: 200,
  });
});

// LOGGED-IN USER DATA
