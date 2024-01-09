import { faker } from "@faker-js/faker";
import shortId from "shortid";

//  user
export const createRandomUser = (count) => {
  Array(count)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      profileImg: faker.image.url(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      nickName: faker.person.firstName(),
      location: faker.location.state(),
      // user's posts
      MyPosts: {
        id: shortId.generate(),
        images: Array(Math.floor(Math.random() * 3) + 1)
          .fill()
          .map(() => faker.image.url()),
        content: faker.lorem.paragraph(),
        location: faker.location.state(),
        isLiked: false,
        likedCount: Math.floor(Math.random() * 100),
      },
      // user's text post
      MyLogs: {},
      // user's saved
      MySavedContents: {},
      // user's tagged
      MeTaggedContents: {},
      // user's friends list
      MyFriends: {
        User: Array(Math.floor(Math.random() * 3) + 1)
          .fill()
          .map(() => {
            return {
              id: shortId.generate(),
              nickName: faker.person.firstName(),
              profileImg: faker.image.url(),
            };
          }),
      },
    }));
};

// random posts
export const createRandomPost = (count) =>
  Array(count)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      content: faker.lorem.paragraph(),
      location: faker.location.state(),
      User: {
        id: shortId.generate(),
        nickName: faker.person.firstName(),
        profileImg: faker.image.url(),
      },
      postImages: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.image.url()),
      Comments: Array(Math.floor(Math.random() * 5) + 1)
        .fill()
        .map(() => {
          return {
            id: shortId.generate(),
            content: faker.lorem.sentence(),
            User: {
              id: shortId.generate(),
              nickName: faker.person.firstName(),
              profileImg: faker.image.url(),
            },
            myComment: false,
          };
        }),

      isLiked: false,
      likedCount: Math.floor(Math.random() * 100),
      isSaved: false,
      savedCount: Math.floor(Math.random() * 100),
      myPost: false,
    }));

// random friends
export const createRandomFriend = (count) => {
  Array(count)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      profileImg: faker.image.url(),
    }));
};
