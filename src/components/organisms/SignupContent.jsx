import NotificationSection from "../molecules/NotificationSection";
import WatchSection from "../molecules/WatchSection";
import style from "./SignupContent.module.scss";

const SignupContent = () => {
  return (
    <div style={{ background: "black", width: "100vw", height: "100vh" }}>
      <div className={style.container}>
        <NotificationSection />
        <WatchSection />
      </div>
      ;
    </div>
  );
};

export default SignupContent;
