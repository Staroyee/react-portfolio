// React imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
// Page imports
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const navLinks = [
    { to: "/about-me", label: "About Me" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header links={navLinks} />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" index element={<Aboutme />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
