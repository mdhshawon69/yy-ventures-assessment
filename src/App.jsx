import {
  BookTrip,
  Destinations,
  Footer,
  Header,
  Partners,
  Services,
  Subscription,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Partners />
      <Subscription />
      <Footer />
    </div>
  );
};

export default App;
