import "./App.css";
import "./fonts/css/general-sans.css";
import Navbar from "./components/common/Navbar";
import HomeImage from "./components/pages/HomeImages/HomeImages";
import HeroSection from "./components/pages/HeroSection/HeroSection";
import LatestProjects from "./components/pages/projects/LatestProjects";
import Trusted from "./components/pages/Trusted/Trusted";
import Services from "./components/pages/Sevices/Services";
import Subscriptions from "./components/pages/Subscription/Subscription";
import WhyShould from "./components/pages/WhyShould/WhyShould";
import Schdule from "./components/pages/Schdule/Schdule";
import ScheduleCall from "./components/pages/ContactUs/ScheduleCall";
import Reviews from "./components/pages/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="websiteContainer">
        <HeroSection />
        <HomeImage />
        <LatestProjects />
        <Subscriptions />
        <Trusted />
        <Services />
        <ScheduleCall />
        <Schdule />
        <div
          style={{
            background: "rgb(250,250,250)",
          }}
        >
          <WhyShould />
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default App;
