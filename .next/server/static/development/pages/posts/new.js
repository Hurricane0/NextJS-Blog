module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/*! exports provided: postsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsAPI", function() { return postsAPI; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

let instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://simple-blog-api.crew.red/"
});
const postsAPI = {
  getPosts() {
    return instance.get(`posts`).then(response => response.data);
  },

  getComments(id) {
    return instance.get(`posts/${id}?_embed=comments`).then(response => response.data.comments);
  },

  createPost(title, body) {
    const data = JSON.stringify({
      title: title,
      body: body
    });
    return instance.post(`posts`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response);
  }

};

/***/ }),

/***/ "./components/CreatePost.tsx":
/*!***********************************!*\
  !*** ./components/CreatePost.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormErrors */ "./components/FormErrors.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\user\\Programming\\Tasks\\DevelopersToday\\components\\CreatePost.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div`
  margin-top: 30px;
`; //Validation schema from Yup

const validationSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(1, "Must have a character").max(50, "Must be shorter than 50").required("Title is required"),
  body: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().min(1, "Must have a character").max(400, "Must be shorter than 400").required("Text is required")
});
/* harmony default export */ __webpack_exports__["default"] = (({
  createPost
}) => {
  return __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-center display-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Create your own post"), __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      title: "",
      body: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, {
      setSubmitting
    }) => {
      setSubmitting(true);
      createPost(values.title, values.body);
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/");
      setSubmitting(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Post title"), __jsx("input", {
    id: "title",
    value: values.title,
    onChange: handleChange,
    onBlur: handleBlur,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("form-control", {
      "is-invalid": touched.title && errors.title,
      "is-valid": touched.title
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx(_FormErrors__WEBPACK_IMPORTED_MODULE_1__["default"], {
    touched: touched.title,
    error: errors.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("label", {
    htmlFor: "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "Post text"), __jsx("textarea", {
    id: "body",
    rows: 3,
    value: values.body,
    onChange: handleChange,
    onBlur: handleBlur,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("form-control", {
      "is-invalid": touched.body && errors.body,
      "is-valid": touched.body && !errors.body
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx(_FormErrors__WEBPACK_IMPORTED_MODULE_1__["default"], {
    touched: touched.body,
    error: errors.body,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })), __jsx("button", {
    disabled: isSubmitting,
    type: "submit",
    className: "btn btn-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Submit")))));
}); // import React, { useState } from "react";
// import styled from "styled-components";
// import Router from "next/router";
// type InputEvent = React.ChangeEvent<HTMLInputElement>;
// type FormEvent = React.FormEvent<HTMLFormElement>;
// type Props = { createPost: Function; isFetching: boolean };
// const Wrapper = styled.div`
//   margin-top: 20px;
// `;
// const CreatePost = ({ createPost, isFetching }: Props) => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
// const handleSubmit = (e: FormEvent): void => {
//   e.preventDefault();
//   if (title.trim && body.trim) {
//     createPost(title, body);
//     Router.push("/");
//   } else {
//     console.log("Characters error");
//   }
// };
//   return (
//     <>
//       <h1 className="text-center display-3">Create your own post</h1>
//       <Wrapper>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Post title</label>
//             <input
//               value={title}
//               onChange={(e: InputEvent) => setTitle(e.target.value)}
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <small id="emailHelp" className="form-text text-muted">
//               Your title should be less than 70 characters
//             </small>
//           </div>
//           <div className="form-group">
//             <label>Post text</label>
//             <textarea
//               value={body}
//               onChange={e => setBody(e.target.value)}
//               className="form-control"
//               id="exampleFormControlTextarea1"
//               rows={3}
//             ></textarea>
//           </div>
//           <button disabled={isFetching} type="submit" className="btn btn-dark">
//             Submit
//           </button>
//         </form>
//       </Wrapper>
//     </>
//   );
// };
// export default CreatePost;

/***/ }),

/***/ "./components/FormErrors.tsx":
/*!***********************************!*\
  !*** ./components/FormErrors.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\user\\Programming\\Tasks\\DevelopersToday\\components\\FormErrors.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Error = ({
  touched,
  error
}) => {
  if (!touched) {
    return null;
  }

  if (error) {
    return __jsx("div", {
      className: "invalid-feedback",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 12
      }
    }, error);
  }

  return __jsx("div", {
    className: "valid-feedback",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }, "Correct");
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./containers/CreatePostContainer.tsx":
/*!********************************************!*\
  !*** ./containers/CreatePostContainer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_actions_postsActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/actions/postsActions */ "./src/actions/postsActions.ts");
/* harmony import */ var _components_CreatePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreatePost */ "./components/CreatePost.tsx");
var _jsxFileName = "C:\\Users\\user\\Programming\\Tasks\\DevelopersToday\\containers\\CreatePostContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CreatePostContainer = ({
  createPost
}) => {
  return __jsx(_components_CreatePost__WEBPACK_IMPORTED_MODULE_3__["default"], {
    createPost: createPost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  });
};

const mapStateToProps = state => ({
  isFetching: state.postsReducer.isFetching
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  createPost: _src_actions_postsActions__WEBPACK_IMPORTED_MODULE_2__["createPost"]
})(CreatePostContainer));

/***/ }),

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_CreatePostContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/CreatePostContainer */ "./containers/CreatePostContainer.tsx");
var _jsxFileName = "C:\\Users\\user\\Programming\\Tasks\\DevelopersToday\\pages\\posts\\new.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_containers_CreatePostContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  });
});

/***/ }),

/***/ "./src/actions/postsActions.ts":
/*!*************************************!*\
  !*** ./src/actions/postsActions.ts ***!
  \*************************************/
/*! exports provided: getPosts, getCurrentComments, createPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentComments", function() { return getCurrentComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api */ "./api/api.ts");
const SET_POSTS = "posts/SET_POSTS";
const SET_CURRENT_COMMENTS = "posts/SET_CURRENT_COMMENTS";
const SET_IS_FETCHING = "posts/SET_IS_FETCHING";


const setPosts = posts => ({
  type: SET_POSTS,
  payload: posts
});

const setCurrentComments = comments => ({
  type: SET_CURRENT_COMMENTS,
  payload: comments
});

const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  payload: isFetching
});

const getPosts = () => async dispatch => {
  try {
    const response = await _api_api__WEBPACK_IMPORTED_MODULE_0__["postsAPI"].getPosts();
    dispatch(setPosts(response));
  } catch (error) {}
};
const getCurrentComments = id => async dispatch => {
  const response = await _api_api__WEBPACK_IMPORTED_MODULE_0__["postsAPI"].getComments(id);
  dispatch(setCurrentComments(response));
};
const createPost = (title, body) => async dispatch => {
  dispatch(setIsFetching(true));
  await _api_api__WEBPACK_IMPORTED_MODULE_0__["postsAPI"].createPost(title, body);
  dispatch(setIsFetching(false));
};

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/posts/new.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Programming\Tasks\DevelopersToday\pages\posts\new.tsx */"./pages/posts/new.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=new.js.map