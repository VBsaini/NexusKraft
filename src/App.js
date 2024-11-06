import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/common/Navbar";
import HomeImage from "./components/pages/HomeImages/HomeImages";
import HeroSection from "./components/pages/HeroSection/HeroSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HomeImage />
    </div>
  );
}

export default App;
