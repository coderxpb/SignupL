import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  const { name, position, testimonial, large } = props;
  return (
    <div className="card" style={large ? { maxWidth: 531 } : {}}>
      <div className="card-header">
        <span className="card-title">{name}</span>
        <span className="card-subtitle">{position}</span>
      </div>
      <p className="card-desc">&ldquo;{testimonial}&rdquo;</p>
    </div>
  );
};

export default TestimonialCard;
