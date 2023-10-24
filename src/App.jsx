import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const navLinks = [
    { to: "/about-me", label: "About Me" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <Router>
      <div>
        <Header links={navLinks} />
        {/* Your route components go here */}
      </div>
    </Router>
  );
}

export default App;
