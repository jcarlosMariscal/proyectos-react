import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PokedexPage } from "../pages/PokedexPage";
import { PokemonPage } from "../pages/PokemonPage";
import { PokemonSearchPage } from "../pages/PokemonSearchPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />}>
        {/* <Route index element={<PokedexPage />} /> */}
        {/* <Route path="pokedex/pokemon/:id" element={<PokemonPage />} /> */}
      </Route>
      <Route path="pokedex/pokemon/:id" element={<PokemonPage />} />
      <Route path="pokedex/search" element={<PokemonSearchPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
