const SET_POSTS = "posts/SET_POSTS";
const SET_CURRENT_COMMENTS = "posts/SET_CURRENT_COMMENTS";
const SET_IS_FETCHING = "posts/SET_IS_FETCHING";

import { ActionType } from "typesafe-actions";
import * as actions from "../actions/postsActions";

export type TodosAction = ActionType<typeof actions>;

export type PostsState = {
  readonly posts: Array<Object>;
  readonly currentComments: Array<Object>;
  readonly isFetching: boolean;
};

const initialState: PostsState = {
  posts: null,
  currentComments: null,
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case SET_CURRENT_COMMENTS:
      return {
        ...state,
        currentComments: action.payload
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    default:
      return state;
  }
}
