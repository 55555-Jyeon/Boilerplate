import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { createRandomUser, createRandomPost } from "../faker/faker-data";

// MOCK
const UserData = createRandomUser(10);
const PostData = createRandomPost(5);
const FriendsData = createRandomUser(15);

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
const signInUserData = [
  {
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    nickName: faker.person.firstName(),
    password: faker.internet.password(),
  },
];

export const getSignInUser = http.get("api/signup", () => {
  return HttpResponse.json([signInUserData], {
    status: 200,
  });
});

export const postSignupUser = http.post("api/signup", async ({ request }) => {
  const newUser = await request.json();
  const { phoneNumber, email, nickName, fullName, password } = newUser;

  const userData = {
    phoneNumber: phoneNumber,
    email: email,
    fullName: fullName,
    nickName: nickName,
    password: password,
  };

  signUpUserData.push(userData);

  return HttpResponse.json(signUpUserData, { status: 201 });
});

// Random Users List
export const getUserInfo = http.get("api/user", () => {
  return HttpResponse.json([UserData], { status: 200 });
});

// My Friends List
export const getMyFriends = http.get("api/user", () => {
  return HttpResponse.json([FriendsData], { status: 200 });
});

// Random Posts List
export const getPostsData = http.get("api/posts", () => {
  return HttpResponse.json([PostData], { status: 200 });
});
