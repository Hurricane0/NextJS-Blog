import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  margin-bottom: 150px;
  font-size: 24px;
`;
const HeadComments = styled.h3`
  margin-bottom: 20px;
`;
const Title = styled.h3`
  margin: 65px;
`;
type Props = { title: string; body: string; comments: any[] };

const PostPage = ({ title, body, comments }: Props) => {
  return (
    <>
      <Title className="text-center display-3">{title}</Title>
      <Paragraph className="lead text-justify">{body}</Paragraph>

      {comments && comments.length !== 0 ? (
        <>
          <HeadComments>Comments</HeadComments>
          {comments.map(comment => (
            <>
              <p className="text-secondary" key={comment.id}>
                <img
                  style={{ marginRight: "10px" }}
                  height="40px"
                  src="https://pngimage.net/wp-content/uploads/2018/06/user-logo-png-4.png"
                  alt="user"
                />
                {comment.body}
              </p>
              <div className="dropdown-divider"></div>
            </>
          ))}
        </>
      ) : (
        <h3 className="text-center">No comments yet</h3>
      )}
    </>
  );
};

export default PostPage;
