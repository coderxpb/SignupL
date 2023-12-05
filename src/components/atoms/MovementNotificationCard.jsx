import { useState } from "react";
import style from "./MovementNotificationCard.module.scss";
import BarChartIcon from "../../assets/icons/bar-chart.svg";

const MovementNotificationCard = (props) => {
  const { disabled, initChecked, initOption } = props;

  const [selectedOption, setselectedOption] = useState(initOption);

  return (
    <div className={style.card}>
      <div className={style.card_header}>
        <span className={style.card_header_icon}>
          <img src={BarChartIcon} />{" "}
        </span>
        <span className={style.card_header_cta}>
          <input type="checkbox" checked={initChecked} />
        </span>
      </div>
      <div className={style.card_content}>
        <p className={style.card_content_desc}>
          Notify me when any wallets move more than
        </p>
        <select
          className={style.card_content_input}
          type="select"
          disabled={disabled}
          value={selectedOption}
          onChange={(e) => setselectedOption(e.target.value)}
        >
          <option value="1000">$1000.00</option>{" "}
        </select>
      </div>
    </div>
  );
};

export default MovementNotificationCard;
