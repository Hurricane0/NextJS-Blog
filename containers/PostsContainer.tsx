import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../src/actions/postsActions";
import PostsList from "../components/PostsList";
import _ from "lodash";

type Props = { posts: any[]; getPosts: () => any[] };

const PostsContainer = ({ posts, getPosts }: Props) => {
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  const sortedPostsByEmptyConent = _.filter(posts, post => {
    return post.title && post.body;
  });
  const sortedPostsByRelevance = _.sortBy(
    sortedPostsByEmptyConent,
    "id"
  ).reverse();
  return <PostsList posts={sortedPostsByRelevance} />;
};
const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

export default connect(mapStateToProps, { getPosts })(PostsContainer);
