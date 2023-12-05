import NotificationSection from "../molecules/NotificationSection";
import TestimonialsSection from "../molecules/TestimonialsSection";
import WatchSection from "../molecules/WatchSection";
import style from "./SignupContent.module.scss";

const SignupContent = () => {
  return (
    <div style={{ background: "black", width: "60%" }}>
      <div className={style.container}>
        <NotificationSection />
        <WatchSection />
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default SignupContent;
