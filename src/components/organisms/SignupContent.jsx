import NotificationSection from "../molecules/NotificationSection";
import TestimonialsSection from "../molecules/TestimonialsSection";
import WatchSection from "../molecules/WatchSection";
import style from "./SignupContent.module.scss";
import SignupForm from "./SignupForm";

const SignupContent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <NotificationSection />
        <WatchSection />
        <div className={style.showMobile}>
          <SignupForm />
        </div>
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default SignupContent;
