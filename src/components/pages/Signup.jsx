import SignupContent from "../organisms/SignupContent";
import SignupForm from "../organisms/SignupForm";

const Signup = () => {
  const submitHandler = () => {
    window.location.href = "https://app.loch.one/welcome";
  };
  return (
    <div>
      <SignupForm submitHandler={submitHandler} />
      <SignupContent />
    </div>
  );
};

export default Signup;
