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
        createdAt: faker.date.between(
          "2023-01-01T00:00:00.000Z",
          "2023-01-31T00:00:00.000Z"
        ),
      },
      // user's reels
      MyReels: {},
      // user's saved
      MySavedContents: {},
      // user's tagged
      MeTaggedContents: {},
    }));
};

// random posts
export const createRandomPost = (count) => {
  Array(count).fill.map(() => ({
    User: {
      id: shortId.generate(),
      nickName: faker.person.firstName(),
      profileImg: faker.image.url(),
    },
    location: faker.location.state(),
    content: faker.lorem.paragraph(),
    isLiked: false,
    likedCount: Math.floor(Math.random() * 100),
    createdAt: faker.date.between(
      "2023-01-01T00:00:00.000Z",
      "2023-01-31T00:00:00.000Z"
    ),
  }));
};
