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
import hero from "./assets/images/hero.jpg";
// Styling imports
import styled from "styled-components";

const FontStyle = styled.div`
  font-family: "EB Garamond", serif;
  
`;

const HeroContainer = styled.div`
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`;

function App() {
  const navLinks = [
    { to: "/about-me", label: "About Me" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <FontStyle>
      <BrowserRouter>
        <HeroContainer>
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
        </HeroContainer>
      </BrowserRouter>
    </FontStyle>
  );
}

export default App;

