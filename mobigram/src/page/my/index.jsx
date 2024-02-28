import { useState } from "react";
import styled from "styled-components";
import defaultImage from "../../assets/defaultImage.svg";
import {
  FlexAlignCenter,
  FlexCenter,
  FlexJustifyCenter,
} from "../../styles/common.style";
import BasicButton from "../../components/button";
import ReviewTab from "./components/review";
import ScrumTab from "./components/scrum";
import SavedTab from "./components/saved";
import ShareTab from "./components/share";
import TaggedTab from "./components/tagged";
import { createRandomUser } from "../../__mock__/faker/faker-data";

const MyPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  // loggedIn User
  const user = createRandomUser(1);
  console.log("user", user);

  const tabs = [
    { name: "REVIEW", content: <ReviewTab user={user} /> },
    { name: "SCRUM", content: <ScrumTab user={user} /> },
    { name: "SHARE", content: <ShareTab user={user} /> },
    { name: "SAVED", content: <SavedTab user={user} /> },
    { name: "TAGGED", content: <TaggedTab user={user} /> },
  ];

  const selectedTab = (index) => {
    setCurrentTab(index);
  };

  return (
    <Container>
      <Contents>
        <UserInfo>
          {user[0].profileImg ? (
            <img src={user[0].profileImg} alt="user selected profile" />
          ) : (
            <img src={defaultImage} alt="default user profile" />
          )}
          <TextInfo>
            <div>
              <Nickname>{user[0].nickName}</Nickname>
              <div>
                <BasicButton variant={"profile"} size={"profile"}>
                  Edit Profile
                </BasicButton>
                <BasicButton variant={"profile"} size={"profile"}>
                  GitHub
                </BasicButton>
                <BasicButton variant={"profile"} size={"profile"}>
                  Velog
                </BasicButton>
              </div>
            </div>
            <div>
              <h3>{user[0].MyPosts.length} posts</h3>
              <h3>{user[0].MyFollowers.length} followers</h3>
              <h3>{user[0].MyFollowings.length} following</h3>
            </div>
            <Term>mobi 2nd member</Term>
            <p>안녕하세요, mobi 2기 멤버입니다. 잘부탁드립니다.</p>
          </TextInfo>
        </UserInfo>
        <TabList>
          {tabs.map((tab, index) => (
            <li
              className={index === currentTab ? "focused" : ""}
              onClick={() => selectedTab(index)}
              key={index}
            >
              {tab.name}
            </li>
          ))}
        </TabList>
        <TabContent>{tabs[currentTab].content}</TabContent>
      </Contents>
    </Container>
  );
};
export default MyPage;

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const Contents = styled.div`
  width: 975px;
  min-height: 960px;
  margin: 0 auto;
`;
const UserInfo = styled.div`
  ${FlexAlignCenter}
  justify-content: space-between;
  flex-direction: row;
  padding: 100px;
  /* profile image */
  & > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ddd;
  }
`;
const Nickname = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE["large"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
`;
const TextInfo = styled.div`
  ${FlexJustifyCenter}
  flex-direction: column;
  width: 540px;
  & > div {
    ${FlexAlignCenter}
    justify-content: space-between;
    flex-direction: row;
  }
  & > div:nth-of-type(2) {
    margin: 30px 0;
    & > h3 {
      font-size: ${({ theme }) => theme.FONT_SIZE["medium"]};
      padding-right: 6px;
    }
  }
`;
const Term = styled.h1`
  margin: 14px 0 8px;
  font-size: ${({ theme }) => theme.FONT_SIZE["medium"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
`;
const TabList = styled.ul`
  ${FlexAlignCenter}
  justify-content: space-evenly;
  flex-direction: row;
  height: 56px;
  border-top: 0.8px solid #d9d9d9;
  padding-bottom: 12px;
  & > li {
    ${FlexCenter}
    width: 90%;
    height: 102%;
    font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};
  }
  & > li.focused {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["semiBold"]};
    border-top: 1.8px solid ${({ theme }) => theme.COLORS.black};
  }
`;
const TabContent = styled.div`
  ${FlexCenter}
`;
