import PostsContainer from "../containers/PostsContainer";
import styled from "styled-components";

const Header = styled.div`
  margin: 15px 0px;
  text-transform: uppercase;
`;
const Index = () => (
  <div>
    <Header>
      <h1 className="text-center display-3">Posts</h1>
    </Header>
    <PostsContainer />
  </div>
);

export default Index;
