import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokeComponent } from "../components/PokedexComponents/CardPokeComponent";

export const PokedexPage = () => {
  const { allPokemons } = useContext(PokemonContext);
  console.log(allPokemons);
  return (
    <>
      <div className="container mx-auto my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
        {allPokemons.map((pokemon) => (
          <CardPokeComponent key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};
