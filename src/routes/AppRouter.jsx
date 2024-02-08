import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { PokemonPage } from "../pages/PokemonPage";
import { PokemonSearchPage } from "../pages/PokemonSearchPage";
import { KanbanPage } from "../pages/KanbanPage";
import { CalculatorPage } from "../pages/CalculatorPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />}></Route>
      <Route path="pokedex/pokemon/:id" element={<PokemonPage />} />
      <Route path="pokedex/search" element={<PokemonSearchPage />} />
      <Route path="kanban" element={<KanbanPage />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
