import { useState } from "react";
import style from "./SignupForm.module.scss";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SignupForm = ({ submitHandler }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {
    if (emailRegex.test(email)) submitHandler();
    else setError("Please enter a valid email.");
  };
  return (
    <div className={style.container}>
      <div className={style.form}>
        <p className={style.form_heading}>Sign up for exclusive access.</p>
        <input
          className={style.form_input}
          style={error ? { border: "1px solid red" } : {}}
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        ></input>
        <span
          className={style.form_error}
          style={error ? { visibility: "visible" } : {}}
        >
          {error || "Please enter a valid email"}
        </span>
        <button className={style.form_button} onClick={onSubmit}>
          Get started
        </button>
        <p className={style.form_caption}>
          You&apos;ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
