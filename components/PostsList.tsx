import React from "react";
import Post from "./Post";
import Loader from "./Loader";

type Props = { posts: any[] };

const PostsList = ({ posts }: Props) => {
  return (
    <>
      {posts ? (
        <div className="row row-cols-1 row-cols-md-3">
          {posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PostsList;
