import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  let haldleInputChange = (e) => {
    setFormData((currData) => {
        return {...currData, [e.target.name]: e.target.value};
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    setFormData({
        username: "",
        password: ""
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username : </label>
        <input
          type="text"
          id="username"
          value={formData.username}
          placeholder="Enter your username"
          name="username"
          onChange={haldleInputChange}
        />

        <br /><br />

        <label htmlFor="password">Enter Password : </label>
        <input
          type="password"
          id="password"
          value={formData.password}
          placeholder="Enter your username"
          name="password"
          onChange={haldleInputChange}
        />

        <br /><br />

        <button>Submit</button>
      </form>
    </>
  );
}
