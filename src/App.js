import "./App.css";
import "./fonts/css/general-sans.css";
import Navbar from "./components/common/Navbar";
import HomeImage from "./components/pages/HomeImages/HomeImages";
import HeroSection from "./components/pages/HeroSection/HeroSection";
import LatestProjects from "./components/pages/projects/LatestProjects";
import Trusted from "./components/pages/Trusted/Trusted";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="websiteContainer">
        <HeroSection />
        <HomeImage />
        <LatestProjects />
        <Trusted />
      </div>
    </div>
  );
}

export default App;
