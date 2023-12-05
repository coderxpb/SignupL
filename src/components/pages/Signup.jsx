import SignupContent from "../organisms/SignupContent";
import SignupForm from "../organisms/SignupForm";
import style from "./Signup.module.scss";

const Signup = () => {
  const submitHandler = () => {
    window.location.href = "https://app.loch.one/welcome";
  };
  return (
    <div className={style.container}>
      <SignupContent />
      <SignupForm submitHandler={submitHandler} />
    </div>
  );
};

export default Signup;
