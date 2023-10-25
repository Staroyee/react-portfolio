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
      <div>
        <Header links={navLinks} />
        <Routes>
          <Route  path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" index element={<Aboutme />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
