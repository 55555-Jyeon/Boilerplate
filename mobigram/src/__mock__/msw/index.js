import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import shortId from "shortid";
import { createRandomUser, createRandomPost } from "../faker/faker-data";

// MOCK
const UserData = createRandomUser(20);
const PostData = createRandomPost(30);

// USER
const signUpUserData = [
  {
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    fullName: faker.person.fullName(),
    nickName: faker.person.firstName(),
    password: faker.internet.password(),
  },
];
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
