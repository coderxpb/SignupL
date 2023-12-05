import style from "./NotificationSection.module.scss";
import BellIcon2 from "../../assets/icons/bell2.svg";
import EmailNotificationCard from "../atoms/EmailNotificationCard";
import MovementNotificationCard from "../atoms/MovementNotificationCard";
import DormantNotificationCard from "../atoms/DormantNotificationCard";

const NotificationSection = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <img className={style.info_icon} src={BellIcon2} />
        <p className={style.info_title}>
          Get notified when a highly correlated whale makes a move
        </p>
        <p className={style.info_desc}>
          Find out when a certain whale moves more than any preset amount on-chain
          or when a dormant whale you care about becomes active.
        </p>
      </div>
      <div className={style.cards}>
        <EmailNotificationCard />
        <MovementNotificationCard />
        <DormantNotificationCard />
      </div>
    </div>
  );
};

export default NotificationSection;
