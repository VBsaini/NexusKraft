import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./fonts/css/general-sans.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="websiteContainer">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              {/* <Route index element={} /> */}
              {/* <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} /> */}
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
