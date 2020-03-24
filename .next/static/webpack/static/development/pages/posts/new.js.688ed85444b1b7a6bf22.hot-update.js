webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./components/CreatePost.tsx":
/*!***********************************!*\
  !*** ./components/CreatePost.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormErrors */ "./components/FormErrors.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\user\\Programming\\Tasks\\DevelopersToday\\components\\CreatePost.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject()); //Validation schema from Yup

var validationSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape({
  title: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(1, "Must have a character").max(50, "Must be shorter than 50").required("Title is required"),
  body: yup__WEBPACK_IMPORTED_MODULE_4__["string"]().min(1, "Must have a character").max(400, "Must be shorter than 400").required("Text is required")
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var createPost = _ref.createPost;
  return __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "text-center display-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Create your own post"), __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      title: "",
      body: ""
    },
    validationSchema: validationSchema,
    onSubmit: function onSubmit(values, _ref2) {
      var setSubmitting = _ref2.setSubmitting;
      setSubmitting(true);
      createPost(values.title, values.body).then(function (res) {
        return console.log(res);
      });
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
      setSubmitting(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, function (_ref3) {
    var values = _ref3.values,
        errors = _ref3.errors,
        touched = _ref3.touched,
        handleChange = _ref3.handleChange,
        handleBlur = _ref3.handleBlur,
        handleSubmit = _ref3.handleSubmit,
        isSubmitting = _ref3.isSubmitting;
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, __jsx("label", {
      htmlFor: "title",
      __self: _this,
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
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("form-control", {
        "is-invalid": touched.title && errors.title,
        "is-valid": touched.title
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }), __jsx(_FormErrors__WEBPACK_IMPORTED_MODULE_2__["default"], {
      touched: touched.title,
      error: errors.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, __jsx("label", {
      htmlFor: "body",
      __self: _this,
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
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("form-control", {
        "is-invalid": touched.body && errors.body,
        "is-valid": touched.body && !errors.body
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }), __jsx(_FormErrors__WEBPACK_IMPORTED_MODULE_2__["default"], {
      touched: touched.body,
      error: errors.body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    })), __jsx("button", {
      disabled: isSubmitting,
      type: "submit",
      className: "btn btn-dark",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, "Submit"));
  })));
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

/***/ })

})
//# sourceMappingURL=new.js.688ed85444b1b7a6bf22.hot-update.js.map