import TestimonialCard from "./components/atoms/TestimonialCard";
import "./App.css";
import EmailNotificationCard from "./components/atoms/EmailNotificationCard";

function App() {
  return (
    <>
      <div>
        <TestimonialCard
          name="Pankaj Bora"
          position="Frontend Dev, ABC"
          testimonial="cool cool cool"
        />
        <EmailNotificationCard />
      </div>
    </>
  );
}

export default App;
