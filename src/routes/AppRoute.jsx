import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PokePage } from "../pages/PokePage";
import { NavBar } from "../components/NavBar";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/poke-api" element={<PokePage />} />
      </Routes>
    </BrowserRouter>
  );
};
