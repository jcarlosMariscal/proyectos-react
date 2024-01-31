import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokedexComponent } from "../components/PokedexComponents/CardPokedexComponent";
import { LoaderComponent } from "../components/pure/LoaderComponent";
import { Pagination } from "../components/Pagination";

export const PokedexPage = () => {
  const { allPokemons, loading, globalPokemons, setOffset } =
    useContext(PokemonContext);
  console.log(globalPokemons.length);
  const allItems = globalPokemons.length;
  const [itemsPerPage] = useState(40);
  return (
    <>
      {loading ? (
        <div className="h-[calc(90vh-2rem)] flex justify-center items-center">
          <LoaderComponent />
        </div>
      ) : (
        <>
          <div className="container mx-auto my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
            {allPokemons.map((pokemon) => (
              <CardPokedexComponent key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </>
      )}
      {globalPokemons.length > 0 && (
        <div className="flex justify-center my-3">
          <Pagination
            itemsPerPage={itemsPerPage}
            allItems={allItems}
            setOffset={setOffset}
          />
        </div>
      )}
    </>
  );
};
