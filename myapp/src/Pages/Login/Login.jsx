


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputControl from "../InputControl/InputControl";


import styles from "./Login.module.css";
import axios from "axios";


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
 

  const handleSubmission = () => {
    if (!values.email || !values.password) {
      alert("Enter all Field")
      return;
    }
   else{
   axios.post(`${process.env.REACT_APP_URL}/user/signin`,values).then((res)=>{console.log(res);
    alert(res.data.msg);localStorage.setItem("userShop",JSON.stringify(res.data.token));navigate("/")}).catch(e=>console.log(e))
   }
   
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{}</b>
          <button onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
