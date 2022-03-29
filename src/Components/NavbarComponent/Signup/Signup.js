import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Signup = (props) => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let Navigate = useNavigate();

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const Handleonsubmit = async (e) => {
    const { name, email, password } = credentials;
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyY2NlNzEzNWQxODM4OGQ4NTFmZDc2In0sImlhdCI6MTY0NzExMDYwNX0.pPtM9OEBJTayv3k3T83BBxnlg35icdbxej2rK-M4I0o'
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    //storing credentials in local storage and redirecting user inside the application.
    if(json.success)
    {
      localStorage.setItem("token", json.authtoken);
    Navigate("/Home");
    props.showAlert('Account created successfully','success');
    }
    else{
      props.showAlert('invalid credentials','danger');
    }
  };
  return (
    <div className="container">
      <form onSubmit={Handleonsubmit}>
        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            onChange={onChange}
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="desc" className="form-text text-muted">
            (We'll never share your email with anyone else.)
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            minLength={8}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            name="cpassword"
            id="cpassword"
            minLength={8}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};
