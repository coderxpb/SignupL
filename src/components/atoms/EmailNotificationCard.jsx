import { useState } from "react";
import style from "./EmailNotificationCard.module.scss";
import BellIcon from "../../assets/icons/bell.svg";

const EmailNotificationCard = (props) => {
  const { disabled, initEmail } = props;

  return (
    <div
      style={{
        background: "white",
        width: "fit-content",
        height: "fit-content",
        borderRadius: 8.4,
      }}
    >
      <div className={style.card}>
        <div className={style.card_header}>
          <span className={style.card_header_icon}>
            <img src={BellIcon} />{" "}
          </span>
          <span className={style.card_header_cta}>Save</span>
        </div>

        <div className={style.card_content}>
          <p className={style.card_content_desc}>
            We&apos;ll be send notifications to you here
          </p>
          <input
            className={style.card_content_input}
            type="email"
            disabled={disabled}
            value={initEmail}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailNotificationCard;
