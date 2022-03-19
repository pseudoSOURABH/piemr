import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


export const Login = () => {
  const Navigate=useNavigate();

 const [credentials, setcredentials] = useState({email:"",password:""});
  

  const onChange=(e)=>{
            setcredentials({...credentials,[e.target.name]:e.target.value})
  }
  
  const Handleonsubmit=async(e)=>{
    e.preventDefault();

    const response=await fetch("http://localhost:5000/api/auth/login",
    {
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        // 'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyY2NlNzEzNWQxODM4OGQ4NTFmZDc2In0sImlhdCI6MTY0NzExMDYwNX0.pPtM9OEBJTayv3k3T83BBxnlg35icdbxej2rK-M4I0o'
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password}),

    });

    const json=await response.json();
    console.log(json);
    if(json.success){
      //if success==true,then we will save the auth token for the sake of login and redirect user to 
      // use the application
      Navigate('/');
      localStorage.setItemI('token',json.authtoken);
    }
    else{
      alert('invalid credentials');
    }

  }
  return (
    <div>
      <form onSubmit={Handleonsubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" value={credentials.password}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};
