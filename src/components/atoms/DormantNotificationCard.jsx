import { useState } from "react";
import style from "./DormantNotificationCard.module.scss";
import ClockIcon from "../../assets/icons/clock.svg";

const DormantNotificationCard = (props) => {
  const { disabled, initChecked, initOption } = props;

  const [selectedOption, setselectedOption] = useState(initOption);

  return (
    <div className={style.card}>
      <div className={style.card_header}>
        <span className={style.card_header_icon}>
          <img src={ClockIcon} />{" "}
        </span>
        <span className={style.card_header_cta}>
          <input type="checkbox" checked={initChecked} />
        </span>
      </div>
      <div className={style.card_content}>
        <p className={style.card_content_desc}>
          Notify me when any wallet dormant for
        </p>
        <select
          className={style.card_content_input}
          type="select"
          disabled={disabled}
          value={selectedOption}
          onChange={(e) => setselectedOption(e.target.value)}
        >
          <option value="30">&gt;30 days</option>
        </select>
        <p className={style.card_content_desc}>becomes active</p>
      </div>
    </div>
  );
};

export default DormantNotificationCard;
