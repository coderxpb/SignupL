import style from "./TestimonialsSection.module.scss";
import Logo from "../../assets/logo.svg";
import TestimonialCard from "../atoms/TestimonialCard";
import Slider from "react-slick";

const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  centerMode: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
};

const testimonials = [
  {
    name: "Jack F",
    position: "Ex Blackrock PM",
    desc: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    position: "Research, 3poch Crypto Hedge Fund",
    desc: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    name: "Shiv S",
    position: "Co-Founder Magik Labs",
    desc: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    large: true,
  },
  {
    name: "Piyush J",
    position: "Research, Quartz Labs",
    desc: "I use Loch everyday now. I can analyze crypto whale trends using it!",
  },
  {
    name: "Rhea T",
    position: "LFM PM",
    desc: "Love how Loch integrates portfolio analytics and whale watching into one app.",
  },
];
const TestimonialsSection = () => {
  return (
    <div className={style.container}>
      <p className={style.heading}>
        <img className={style.logoMobile} src={Logo} />
        Testimonials
      </p>
      <div className={style.content}>
        <img className={style.logo} src={Logo} />
        <div style={{ width: 800 }}>
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={"i" + i + t.name}
                name={t.name}
                position={t.position}
                testimonial={t.desc}
                large={t.large}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
