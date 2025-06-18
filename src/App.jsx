import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Banner2 from "./components/Banner/Banner2";
import Email from "./components/Email/Email";
import FeedbackDashboard from "./components/Dashboard/FeedbackDashboard";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Cards />
      <Banner2 />
      <Email />
      {/* Feedback Dashboard (for admin view, move as needed) */}
      <FeedbackDashboard />
    </main>
  );
};

export default App;
