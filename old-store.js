// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from "redux-thunk";

// const initialState = {
//   posts: [
//     // { id: 1, postText: "It is the first post" },
//     // { id: 2, postText: "There is the second post" },
//     // { id: 3, postText: "The third post!" }
//   ]
// };

// export const actionTypes = {
//   ADD: "ADD",
//   DELETE: "DELETE"
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD:
//       return {
//         ...state,
//         posts: [
//           ...state.posts,
//           {
//             id: 4,
//             postText: action.payload
//           }
//         ]
//       };
//     default:
//       return state;
//   }
// };

// export const addPost = text => dispatch => {
//   return dispatch({ type: actionTypes.ADD, payload: text });
// };

// export const makeStore = initialState => {
//   return createStore(reducer, initialState);
// };
//***************************************************** */
// export const store = (store = initialState) => {
//   createStore(
//     reducer,
//     store,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   );
// };
//********************************************************* */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case "FOO":
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export const makeStore = initialState => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};
