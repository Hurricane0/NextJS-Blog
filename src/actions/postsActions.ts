const SET_POSTS = "posts/SET_POSTS";
const SET_CURRENT_COMMENTS = "posts/SET_CURRENT_COMMENTS";
const SET_IS_FETCHING = "posts/SET_IS_FETCHING";

import { postsAPI } from "../../api/api";
import { Dispatch } from "redux";

const setPosts = (posts: Array<Object>) => ({
  type: SET_POSTS,
  payload: posts
});

const setCurrentComments = (comments: Array<Object>) => ({
  type: SET_CURRENT_COMMENTS,
  payload: comments
});

const setIsFetching = (isFetching: boolean) => ({
  type: SET_IS_FETCHING,
  payload: isFetching
});

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const response = await postsAPI.getPosts();
    dispatch(setPosts(response));
  } catch (error) {}
};

export const getCurrentComments = (id: string) => async (
  dispatch: Dispatch
) => {
  const response = await postsAPI.getComments(id);
  dispatch(setCurrentComments(response));
};

export const createPost = (title: string, body: string) => async (
  dispatch: Dispatch
) => {
  dispatch(setIsFetching(true));
  await postsAPI.createPost(title, body);
  dispatch(setIsFetching(false));
};
