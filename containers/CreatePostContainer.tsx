import React from "react";
import { connect } from "react-redux";
import { createPost } from "../src/actions/postsActions";
import CreatePost from "../components/CreatePost";

type Props = {
  createPost(title: string, body: string): void;
};
const CreatePostContainer = ({ createPost }: Props) => {
  return <CreatePost createPost={createPost} />;
};
const mapStateToProps = state => ({
  isFetching: state.postsReducer.isFetching
});

export default connect(mapStateToProps, { createPost })(CreatePostContainer);
