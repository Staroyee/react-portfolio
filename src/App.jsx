import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-warning min-vh-100 d-flex flex-column">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" index element={<Aboutme/>}/>
            <Route path="/portfolio"  element={<Portfolio/>}/>
            <Route path="/contact"  element={<Contact/>}/>
            <Route path="/resume"  element={<Resume/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
