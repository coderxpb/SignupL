import style from "./TestimonialsSection.module.scss";
import Logo from "../../assets/logo.svg";
import TestimonialCard from "../atoms/TestimonialCard";

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
];
const TestimonialsSection = () => {
  return (
    <div className={style.container}>
      <p className={style.heading}>Testimonials</p>
      <div className={style.content}>
        <img className={style.logo} src={Logo} />
        <div className={style.cards}>
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={"i" + i + t.name}
              name={t.name}
              position={t.position}
              testimonial={t.desc}
              large={t.large}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
