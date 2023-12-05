import TestimonialCard from "./components/atoms/TestimonialCard";
import "./App.css";
import EmailNotificationCard from "./components/atoms/EmailNotificationCard";
import MovementNotificationCard from "./components/atoms/MovementNotificationCard";
import DormantNotificationCard from "./components/atoms/DormantNotificationCard";

function App() {
  return (
    <>
      <div>
        <TestimonialCard
          name="Pankaj Bora"
          position="Frontend Dev, ABC"
          testimonial="cool cool cool"
        />
        <EmailNotificationCard
          disabled={true}
          initEmail="bora.pankaj901@gmail.com"
        />
        <MovementNotificationCard
          initOption="1000"
          disabled={true}
          initChecked={true}
        />
        <DormantNotificationCard
          initOption="1000"
          disabled={true}
          initChecked={true}
        />
      </div>
    </>
  );
}

export default App;
