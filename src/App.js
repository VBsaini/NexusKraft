import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./fonts/css/general-sans.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home/Home";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import "./Responsive.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="websiteContainer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
