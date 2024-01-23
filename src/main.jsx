import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
// import { PokePage } from "./pages/PokePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <div className="bg-sky-900 h-screen"> */}
    {/* <div className=""> */}
    <NavBar />
    <HomePage />
    {/* <PokePage /> */}
    {/* </div> */}
  </React.StrictMode>
);
