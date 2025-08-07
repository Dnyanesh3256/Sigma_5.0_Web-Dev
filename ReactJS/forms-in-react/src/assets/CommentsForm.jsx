import { useState } from "react";
import { useFormik } from "formik";

export default function CommentsForm({ addNewComment }) {
  // const [ formData, setFormData ] = useState({
  //     username: "",
  //     remarks: "",
  //     rating: 5
  // });

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length > 15) {
      errors.username = "Must be 15 characters or less";
    }

    if (!values.remarks) {
      errors.remarks = "Remarks is required!";
    } else if (values.remarks.length > 30) {
      errors.remarks = "Must be 30 characters or less";
    }

    return errors;
  };

  const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

  // const handleInputChange = (e) => {
  //     setFormData((currData) => {
  //         return {...currData, [e.target.name]: e.target.value}
  //     })
  // }

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     addNewComment(formData);
  //     console.log(formData);

  //     setFormData({
  //         username: "",
  //         remarks: "",
  //         rating: 5
  //     })
  // }

  return (
    <>
      <h2>Give a comment!</h2>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="enter username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />

        {formik.errors.username ? <div style={{color: "red"}}>{formik.errors.username}</div> : null}

        <br /> <br />

        <label htmlFor="remarks">Remarks : </label>
        <textarea
          name="remarks"
          id="remarks"
          placeholder="add few remarks"
          onChange={formik.handleChange}
          value={formik.values.remarks}
        ></textarea>

        {formik.errors.remarks ? <div style={{color: "red"}}>{formik.errors.remarks}</div> : null}

        <br />
        <br />

        <label htmlFor="rating">Rating : </label>
        <input
          type="number"
          name="rating"
          id="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />

        <br />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </>
  );
}
