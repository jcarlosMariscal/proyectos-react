import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokedexComponent } from "../components/PokedexComponents/CardPokedexComponent";
import { LoaderComponent } from "../components/pure/LoaderComponent";

export const PokedexPage = () => {
  const { allPokemons, loading } = useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <div className="h-[calc(90vh-2rem)] flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <div className="container mx-auto my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
          {allPokemons.map((pokemon) => (
            <CardPokedexComponent key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </>
  );
};
