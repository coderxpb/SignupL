import style from "./SignupForm.module.scss";

const SignupForm = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <p className={style.form_heading}>Sign up for exclusive access.</p>
        <input
          className={style.form_input}
          type="email"
          placeholder="Your email address"
        ></input>
        <button className={style.form_button}>Get started</button>
        <p className={style.form_caption}>
          You&apos;ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
