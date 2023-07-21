import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import InputControl from "../InputControl/InputControl";


import styles from "./Signup.module.css";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
     alert("Enter all field")
      return ;
    }
   else{
    axios.post("https://fair-tan-indri-ring.cyclic.app/user/signup",values).then((res)=>{alert(res.data.msg);navigate('/login')}).catch(e=>{console.log(e)})
   }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{}</b>
          <button onClick={handleSubmission} >
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;