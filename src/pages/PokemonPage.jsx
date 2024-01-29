import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
// import { CardPokeComponent } from "../components/PokedexComponents/CardPokeComponent";

export const PokemonPage = () => {
  const { allPokemons } = useContext(PokemonContext);
  return <>Hola</>;
};
