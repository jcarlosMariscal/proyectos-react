import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { PokemonProvider } from "./context/PokemonProvider";
import { KanbanProvider } from "./context/KanbanProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* // <div> */}
    <BrowserRouter>
      <PokemonProvider>
        <KanbanProvider>
          <NavBar />
          <AppRouter></AppRouter>
        </KanbanProvider>
      </PokemonProvider>
    </BrowserRouter>
    {/* </div> */}
  </React.StrictMode>
);
