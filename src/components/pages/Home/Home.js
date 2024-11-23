import HomeImage from "../HomeImages/HomeImages";
import HeroSection from "../HeroSection/HeroSection";
import LatestProjects from "../projects/LatestProjects";
import Trusted from "../Trusted/Trusted";
import Services from "../Sevices/Services";
import Subscriptions from "../Subscription/Subscription";
import WhyShould from "../WhyShould/WhyShould";
import ScheduleCall from "../ContactUs/ScheduleCall";
import Reviews from "../Reviews/Reviews";

function Home() {
  return (
    <>
      <HeroSection />
      <HomeImage />
      <LatestProjects />
      <Subscriptions />
      <Trusted />
      <Services />
      <ScheduleCall />
      <div
        style={{
          background: "rgb(250,250,250)",
        }}
      >
        <WhyShould />
        <Reviews />
      </div>
    </>
  );
}

export default Home;
