import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-warning min-vh-100 d-flex flex-column" >
      <Header/>
      <div className="flex-grow-1">Body Here</div>
      <Footer/>
    </div>
  );
}

export default App;
