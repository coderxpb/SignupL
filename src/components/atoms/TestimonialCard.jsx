import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  const { name, position, testimonial } = props;
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{name}</span>
        <span className="card-subtitle">{position}</span>
      </div>
      <p className="card-desc">&ldquo;{testimonial}&rdquo;</p>
    </div>
  );
};

export default TestimonialCard;
