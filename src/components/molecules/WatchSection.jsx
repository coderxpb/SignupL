import style from "./WatchSection.module.scss";
import Eye from "../../assets/icons/Eye.svg";
import Cohorts1 from "../../assets/imgs/Cohorts1.png";

const WatchSection = () => {
  return (
    <div className={style.container}>
      <div className={style.cards}>
        <img src={Cohorts1} className={style.image} />
      </div>
      <div className={style.info}>
        <img className={style.info_icon} src={Eye} />
        <p className={style.info_title}>Watch what the whales are doing</p>
        <p className={style.info_desc}>
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default WatchSection;
