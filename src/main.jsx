import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { PokemonProvider } from "./context/PokemonProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <NavBar />
        <AppRouter></AppRouter>
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
