// Import necessary React Router components and hooks.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom page components (Aboutme, Portfolio, Resume, and Contact).
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// Import the 'styled-components' library for styling, and import a CSS file ('App.css') for additional styles.
import styled from "styled-components";
import "./App.css";

// Create a styled component 'FontStyle' for custom font styles.
const FontStyle = styled.div`
  font-family: "EB Garamond", serif;
  text-shadow: -0px 0px 10px rgba(0, 0, 0, 0.9);
  color: #000000;
`;

// Define the main 'App' component.
function App() {
  return (
    <>
      <FontStyle>
        <BrowserRouter>
            <Routes>
              {/* Define the routes and corresponding page components. */}
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" index element={<Aboutme />} />
              {/* '*' acts as a catch-all route, rendering the 'Aboutme' component by default. */}
            </Routes>
        </BrowserRouter>
      </FontStyle>
    </>
  );
}

export default App;
// Export the 'App' component for use in other parts of the application.
