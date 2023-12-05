import NotificationSection from "../molecules/NotificationSection";
import style from "./SignupContent.module.scss";

const SignupContent = () => {
  return (
    <div style={{ background: "black", width: "100vw", height: "100vh" }}>
      <div className={style.container}>
        <NotificationSection />
      </div>
      ;
    </div>
  );
};

export default SignupContent;
