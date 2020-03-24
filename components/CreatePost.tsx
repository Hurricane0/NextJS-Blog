import Error from "./FormErrors";
import { Formik } from "formik";
import * as Yup from "yup";
import cn from "classnames";
import styled from "styled-components";
import Router from "next/router";

const Wrapper = styled.div`
  margin-top: 30px;
`;

//Validation schema from Yup
const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, "Must have a character")
    .max(50, "Must be shorter than 50")
    .required("Title is required"),
  body: Yup.string()
    .min(1, "Must have a character")
    .max(400, "Must be shorter than 400")
    .required("Text is required")
});

export default ({ createPost }) => {
  return (
    <div className="container">
      <h1 className="text-center display-3">Create your own post</h1>
      <Wrapper>
        <Formik
          initialValues={{ title: "", body: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            createPost(values.title, values.body);
            Router.push("/");
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Post title</label>
                <input
                  id="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn("form-control", {
                    "is-invalid": touched.title && errors.title,
                    "is-valid": touched.title
                  })}
                />
                <Error touched={touched.title} error={errors.title} />
              </div>
              <div className="form-group">
                <label htmlFor="body">Post text</label>
                <textarea
                  id="body"
                  rows={3}
                  value={values.body}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={cn("form-control", {
                    "is-invalid": touched.body && errors.body,
                    "is-valid": touched.body && !errors.body
                  })}
                />
                <Error touched={touched.body} error={errors.body} />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-dark"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Wrapper>
    </div>
  );
};

// import React, { useState } from "react";
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
