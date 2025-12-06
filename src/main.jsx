import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";          // Tailwind
import "./style.css"; // tumhara vCard wala CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
