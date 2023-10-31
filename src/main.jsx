// Import the 'React' module from the 'react' package.
import React from "react";
// Import the 'ReactDOM' module from the 'react-dom/client' package.
import ReactDOM from "react-dom/client";
// Import the 'App' component from the 'App.jsx' file.
import App from "./App.jsx";
// Import CSS styles from the Bootstrap framework. This line imports Bootstrap's CSS.
import "bootstrap/dist/css/bootstrap.css";

// Create a root element in the HTML document with the id 'root' and render the 'App' component inside it.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap the 'App' component with 'React.StrictMode' for additional checks and warnings in development mode.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
