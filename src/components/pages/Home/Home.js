import HomeImage from "../HomeImages/HomeImages";
import HeroSection from "../HeroSection/HeroSection";
import LatestProjects from "../projects/LatestProjects";
import Trusted from "../Trusted/Trusted";
import Services from "../Sevices/Services";
import Subscriptions from "../Subscription/Subscription";
import WhyShould from "../WhyShould/WhyShould";
import ScheduleCall from "../ContactUs/ScheduleCall";
import Reviews from "../Reviews/Reviews";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    if (window.location.href.includes("#")) {
      let path = window.location.href.split("#")[2];
      console.log(path);
      switch (path) {
        case "about":
          document
            .getElementById("AboutUs")
            .scrollIntoView({ behavior: "smooth" });
          break;
        case "services":
          document
            .getElementById("Services")
            .scrollIntoView({ behavior: "smooth" });
          break;
        case "work":
          document
            .getElementById("Work")
            .scrollIntoView({ behavior: "smooth" });
          break;
        case "contact":
          document
            .getElementById("Contact")
            .scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
      // window.location.href = window.location.href.split("#")[0];
    }
  }, []);
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
