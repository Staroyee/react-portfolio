// Import necessary React Router components and hooks.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Header and Footer components.
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import custom page components (Aboutme, Portfolio, Resume, and Contact).
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// Import an image asset for the hero section background (heroAboutme).
import heroAboutme from "./assets/images/hero-aboutme.jpg";

// Import the 'styled-components' library for styling, and import a CSS file ('App.css') for additional styles.
import styled from "styled-components";
import "./App.css";

// Create a styled component 'FontStyle' for custom font styles.
const FontStyle = styled.div`
  font-family: "EB Garamond", serif;
  text-shadow: -0px 0px 10px rgba(0, 0, 0, 0.9);
  color: #000000;
`;

// Create a styled component 'HeroContainer' for styling the hero section.
const HeroContainer = styled.div`
  background-image: url(${heroAboutme});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
`;

// Define the main 'App' component.
function App() {
  // Define an array of navigation links.
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
          {/* Render the Header component with navigation links. */}
          <div className="flex-grow-1">
            <Routes>
              {/* Define the routes and corresponding page components. */}
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" index element={<Aboutme />} />
              {/* '*' acts as a catch-all route, rendering the 'Aboutme' component by default. */}
            </Routes>
          </div>
          <Footer />
          {/* Render the Footer component. */}
        </HeroContainer>
      </BrowserRouter>
    </FontStyle>
  );
}

export default App;
// Export the 'App' component for use in other parts of the application.
