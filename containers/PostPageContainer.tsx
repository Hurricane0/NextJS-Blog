import React from "react";
import { connect } from "react-redux";
import PostPage from "../components/PostPage";
import _ from "lodash";
import { getPosts, getCurrentComments } from "../src/actions/postsActions";
import Loader from "../components/Loader";

type Props = {
  id: number | string;
  posts: any[];
  getPosts: () => any[];
  comments: any[];
  getCurrentComments: (id: number | string) => any[];
};

const PostPageContainer = ({
  id,
  posts,
  getPosts,
  comments,
  getCurrentComments
}: Props) => {
  if (!posts) {
    getPosts();
    return <Loader />;
  } else {
    //Finding post matching to id from route query
    getCurrentComments(id);
    const post = _.find(posts, post => {
      return post.id === Number(id);
    });
    return <PostPage title={post.title} body={post.body} comments={comments} />;
  }
};
const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  comments: state.postsReducer.currentComments
});

export default connect(mapStateToProps, { getPosts, getCurrentComments })(
  PostPageContainer
);
