import styled from "styled-components";

const ScrumTab = ({ user }) => {
  const scrums = user[0].MyScrums;
  console.log("scrums", scrums);
  return (
    <Container>
      {scrums.map((scrum) => (
        <OneScrum key={scrum.id} scrum={scrum} />
      ))}
    </Container>
  );
};
export default ScrumTab;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin: 40px 0 100px;
`;
const OneScrum = styled.div`
  width: 100%;
  height: 60px;
  margin: 10px 0;
  border: 1px solid ${({ theme }) => theme.COLORS.gray[300]};
`;
