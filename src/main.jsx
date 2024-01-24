import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
// import { NavBar } from "./components/NavBar";
import { AppRoute } from "./routes/AppRoute";
// import { PokePage } from "./pages/PokePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className="bg-gray-100"> */}
    <AppRoute></AppRoute>
    {/* </div> */}
    {/* <HomePage /> */}
  </React.StrictMode>
);
